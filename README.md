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
Het ontwerp van het Oncollaboration-platform is gebaseerd op een styleguide, waarin de kleuren en lettertypes zijn vastgelegd. Er is een high-fidelity ontwerp gemaakt in Figma, dat als basis dient voor de uiteindelijke ontwikkeling van de pagina's.

- [Bekijk hier het Figma ontwerp](https://www.figma.com/design/1ALElL2SuXZRghkAgXv2C7/Webdesign-Oncollaboration?node-id=0-1&t=E20UIidcLyUHDKC2-1)
  
Ontwerpkeuzes
De keuze voor ronde vormen en consistent kleurgebruik zorgt voor een samenhangend ontwerp dat het platform gebruiksvriendelijk en visueel aantrekkelijk maakt.

<img width="850" alt="image" src="https://github.com/user-attachments/assets/4db086de-b069-478a-90f6-fe2eef9edd75" />
<img width="850" alt="image" src="https://github.com/user-attachments/assets/28a0eee0-bdf1-40e4-990b-9f519ebac72c" />

### Het ontwikkelde platform
In de afgelopen sprint zijn de volgende pagina's ontwikkeld:

- Homepagina: Een introductie van Oncollaboration met een overzicht van webinars en contourings. Gebruikers kunnen zoeken op webinars en contourings.

[Linkje naar de homepagina](https://server-side-rendering-server-side-website-v7dd.onrender.com/)

- Webinar Overzichtspagina: Een overzicht van alle webinars, waarbij gebruikers kunnen zoeken en filteren op categorie.

[Linkje naar de Overzichtspagina](https://server-side-rendering-server-side-website-v7dd.onrender.com/webinars)

- Webinar Detailpagina: De detailpagina van een specifieke webinar, met de mogelijkheid om de webinar af te spelen en te communiceren via een chatfunctie. Er wordt belangrijke informatie gedeeld over de spreker en de inhoud van de webinar.

[Linkje naar de Webinar Detailpagina](https://server-side-rendering-server-side-website-v7dd.onrender.com/webinars/fractionation-in-head-neck-and-cns-malignancies)

### Belangrijke features:

- Filteren op categorie webinars

Op de webinar overzichtspagina is een er een filter functie waarbij je kunt filteren op cateogrie m.b.t de webinars. Op deze manier kan de gebruiker gericht de juiste webinar vinden.

https://github.com/user-attachments/assets/ecee5bc2-2b70-4c93-a086-5fc2d2ad9765

- Mobile first ontwikkeld (reponsive)

Het platform is volledig mobile-first ontwikkeld, waardoor het goed werkt op verschillende schermgroottes van mobiel tot desktop.

https://github.com/user-attachments/assets/2dd629de-f9d7-4cb0-b162-897633b9b7a5

## Kenmerken
In dit project wordt er gebruik gemaakt van Node.js en Express om de webserver te beheren. Voor het genereren van dynamische HTML-pagina's wordt Liquid gebruikt, wat de webpagina's flexibel en makkelijk te onderhouden maakt.

### Route-configuraties
- Homepagina [`/`](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/server.js#L38-L47): De webserver haalt gegevens op via de Directus API en toont deze op de hoofdpagina [`index.liquid`](https://github.com/ambersr/server-side-rendering-server-side-website/blob/main/views/index.liquid).
- Webinars overzichtspagina [`/webinars/`](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/server.js#L50-L71): Hier worden webinars opgehaald en kunnen gebruikers deze filteren op categorie. De data wordt weergegeven in de template [`webinars.liquid`](https://github.com/ambersr/server-side-rendering-server-side-website/blob/main/views/webinars.liquid).
- Webinar Detailpagina [`/webinar/:slug/`](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/server.js#L73-L85) : Deze route haalt de informatie van een specifiek webinar op basis van de slug in de URL en toont deze op de [`webinar.liquid`](https://github.com/ambersr/server-side-rendering-server-side-website/blob/main/views/webinar.liquid).

### Data ophalen uit database
- Data ophalen via API: De server maakt een API-aanroep om de benodigde gegevens op te halen in JSON-formaat. [Voorbeeld](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/server.js#L77)
- Data doorgeven aan Liquid: De opgehaalde data wordt doorgegeven aan de Liquid-template via response.render(). [Voorbeeld](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/server.js#L81-L85)
- Data verwerken in Liquid: In de Liquid-template wordt de data met behulp van loops en variabelen verwerkt en weergegeven. [Voorbeeld](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/views/webinar.liquid#L52-L53)
- HTML genereren en tonen: Liquid genereert de HTML, die naar de browser wordt gestuurd en zichtbaar wordt voor de gebruiker.

## Installatie

De meeste informatie is te vinden bij het kopje kenmerken. Voor verdere gebruik van mijn project zijn dit nog een paar handige benodigdheden.

#### `npm i` of `npm install`
Hiermee installeer je de benodigde packages zoals express & cookie-parser.

#### `npm start`
Hiermee start je het project.

Open vervolgens [http://localhost:8000](http://localhost:8000) om het project te zien in de browser.

Om edits te zien moet je de pagina refreshen omdat het geen hot-reload bevat.

## Bronnen

- Design Styling: [Design challenge](https://github.com/fdnd-agency/oncollaboration/wiki/Design-Challenge)
- Content: [Repository Oncollaboration](https://github.com/fdnd-agency/oncollaboration)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
