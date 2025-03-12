# Platform Oncollaboration

Het platform waar radiologen uit Indonesië en Nederland samenkomen om hun kennis te delen en recente ontwikkelingen in hun medische vakgebied te bespreken.

Tijdens sprint 8 lag de focus voor het ontwikkelen van de pagina's op de webinar overzichtspagina en de webinar detailpagina. Alle content wordt dynamisch opgehaald uit een database die ik van de opdrachtgever ontvangen heb.

### Wie is Oncollaboration
Oncollaboration is een ontwerp voor een online platform voor samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten. Oncollaboration is het afstudeerwerk van oud-CMD student Sergio Eijben. Sergio is in opdracht van radiotherapeute Judi van Diessen van het Antoni van Leeuwenhoek ziekenhuis afgestudeerd op de vraag over hoe de samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten te verbeteren.

### Vraag opdrachtgever

Ontwikkel een platform waarop de focus naar webinars ligt.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
### Het ontwerp
Aan de hand van een styleguide waarin de kleuren en lettertypes vastgelegd staan, is er een high-fi ontwerp gemaakt in Figma. Aan de hand van het consistent doorvoeren van ronde vormen en kleurgebruik dit maakt het ontwerp een geheel.

Linkje naar het figma ontwerp:

### Het ontwikkelde platform
In de afgelopen sprint zijn de volgende pagina's ontwikkeld:

- Homepagina

Op de homepagina is er een korte introductie over Oncollaboration en worden er een aantal webinars en countourings overzichtelijk weergegeven. Daarnaast is er ook een zoekfunctie waarbij je kunt zoeken op webinars en contourings.

[Linkje naar de homepagina](https://server-side-rendering-server-side-website-v7dd.onrender.com/)

- Webinar overzichtspagina

Op de Webinars overzichtspagina is er een overzicht van alle webinars. Met de zoekfunctie heb je de mogelijkheid om te zoeken op webinar.

[Linkje naar de contact pagina](https://server-side-rendering-server-side-website-v7dd.onrender.com/webinars)

- Webinar detailpagina

Op de Webinar detailpagina wordt de webinar weergegeven. Deze kan je afspelen en via een chat communiceren met radiologen in Nederland en in Indonesie. Daarentegen wordt er ook belangrijke informatie gedeeld over de webinar, zoals de speaker en het bekijken van de inhoud van de webinar.

[Linkje naar de Partner pagina](https://server-side-rendering-server-side-website-v7dd.onrender.com/webinars/fractionation-in-head-neck-and-cns-malignancies)

### Belangrijke features:

- Filteren op categorie webinars

Op de webinar overzichtspagina is een er een filter functie waarbij je kunt filteren op cateogrie m.b.t de webinars. Op deze manier kan de gebruiker gericht de juiste webinar vinden.

https://github.com/user-attachments/assets/ecee5bc2-2b70-4c93-a086-5fc2d2ad9765

- Mobile first ontwikkeld (reponsive)

Alle pagina's zijn mobile first ontwikkeld. Dit houdt in de pagina's vanuit een mobiel schermbreedte wordt opgebouwd naar een desktop scherm. Dit zorgt ervoor dat de website responsive is voor elk beeldscherm breedte.

https://github.com/user-attachments/assets/2dd629de-f9d7-4cb0-b162-897633b9b7a5

## Kenmerken
In dit project maak ik gebruik van Node.js samen met Express om een webserver op te zetten. Tevens gebruik ik Liquid als template om dynamische HTML-pagina's te creëren, waardoor de webpagina's flexibel en eenvoudig te onderhouden zijn.

### Route-configuraties
- Homepagina `/`: De webserver haalt informatie op via de Directus API, waaronder gegevens over webinars en contourings. Al deze data wordt getoont op de hoofdpagina `index.liquid`.
- Webinars overzichtspagina `/webinars/`: Hier worden webinars opgehaald en kunnen gebruikers de webinars filteren op categorie. Al deze data wordt getoont op de `webinars.liquid`.
- Webinar Detailpagina `/webinars/:slug` : Deze route haalt de informatie op van een specifiek webinar, op basis van de slug die in de URL staat. Op deze pagina wordt specifieke data getoont speciek van de desbetreffende webinar. Al deze data wordt getoont op de `webinar.liquid`.

### Data ophalen uit database
- De data wordt opgehaald uit een database waarin alle benodigde content staat. Voorbeeld
- Deze data wordt gefetched zodat de data op de pagina getoond wordt. Voorbeeld
- De data die gefetched wordt wordt gerenderd. Voorbeeld
- In de liquid aan de hand van een `for` loop wordt de juiste data ingeladen. Voorbeeld

## Installatie

De meeste informatie is te vinden bij het kopje kenmerken. Voor verdere gebruik van mijn project zijn dit nog een paar handige benodigdheden.

#### `npm i` of `npm install`
Hiermee installeer je de benodigde packages zoals express & cookie-parser.

#### `npm start`
Hiermee start je het project.

Open vervolgens [http://localhost:8000](http://localhost:8000) om het project te zien in de browser.

Om edits te zien moet je de pagina refreshen omdat het geen hot-reload bevat.

## Bronnen

- Styling, https://github.com/fdnd-agency/oncollaboration/wiki/Design-Challenge
- Content, https://github.com/fdnd-agency/oncollaboration

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
