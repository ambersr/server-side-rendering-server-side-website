// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Functie fetch omzetten naar JSON
async function fetchJson(url) {
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON
}

// Algemene link
const webinarsLink = "https://fdnd-agency.directus.app/items/avl_webinars";
const categoryLink = "https://fdnd-agency.directus.app/items/avl_categories";
const contouringsLink = "https://fdnd-agency.directus.app/items/avl_contourings";
const webinarsField = "?fields=duration,title,slug,date,video,thumbnail,.*.*,speakers.*.*,categories.avl_categories_id.*,resources.*.*";
const contouringsField = "?fields=title,image_scan,user_id.fullname,categories.avl_categories_id.*";

// Route voor Homepagina (index)
app.get('/', async function (req, res) {
    // Fetches webinars en categories
    const webinarsResponseJSON = await fetchJson(webinarsLink + webinarsField);
    const contouringsResponseJSON = await fetchJson(contouringsLink + contouringsField);

   res.render("index.liquid", { 
    webinars: webinarsResponseJSON.data,
    contourings: contouringsResponseJSON.data
  })
});

// Route voor url /webinar/:slug
app.get("/webinars", async function (req, res){
 
    const categoryFilter = req.query.category || ""; // Haalt categorie uit de URL

    // Fetches webinars en categories
    const webinarsResponseJSON = await fetchJson(webinarsLink + webinarsField);
    const categoryResponseJSON = await fetchJson(categoryLink);

    let filteredWebinars = webinarsResponseJSON.data;

     if (categoryFilter) {
        filteredWebinars = filteredWebinars.filter(webinar =>
            webinar.categories.some(category => category.avl_categories_id.name === categoryFilter)
        );
    }

  res.render('webinars.liquid', { 
        webinars: filteredWebinars, 
        categories: categoryResponseJSON.data,
        selectedCategory: categoryFilter // Zorgt dat de juiste radio button gecheckt blijft
    });
})

// Route voor url /webinar/:slug
app.get("/webinars/:slug", async function (request, response){
  const slug = request.params.slug

  const webinarResponseJSON = await fetchJson(webinarsLink + `?filter[slug]=${slug}&fields=featured,views,id,description,duration,title,slug,date,thumbnail,video,resources,.*.*,speakers.*.*,resources.*.*,categories.avl_categories_id.*`);

  const allWebinarsResponseJSON = await fetchJson(webinarsLink + `?fields=title,slug,thumbnail,date,speakers.*`);

  response.render("webinar.liquid", { 
    webinars: webinarResponseJSON.data,
    allWebinars: allWebinarsResponseJSON.data
  });
})

// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// 404 pagina
app.use((req, res, next) => {
  res.status(404).render("error.liquid")
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})