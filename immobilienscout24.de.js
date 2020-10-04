'use strict';

if (document.location.hostname.match(/www\.immobilienscout24\.de/)) {
  document.addEventListener("DOMContentLoaded", function (event) {

    var copyElementToClipboard = function (element) {
      window.getSelection().removeAllRanges();
      let range = document.createRange();
      range.selectNode(document.getElementById(element));
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    }


    var objectId = document
      .querySelector("#is24-content div.is24-scoutid__content")
      .textContent
      .trim();


    var objectScoutId = false;
    var objectScoutUrl = false;

    if (objectId) {
      objectScoutId = objectId
        .replace(/.*Scout-ID:/, '')
        .trim();

      if (objectScoutId) {
        objectScoutUrl = `https://www.immobilienscout24.de/expose/${objectScoutId}`;
      }
    }


    var requestForFlatText = false;
    var requestForFlatTextHtml = false;

    var objectStreetAndNumber = '';
    if (document.querySelector("#is24-content span.zip-region-and-country").previousElementSibling) {
      var objectStreetAndNumber = document
        .querySelector("#is24-content span.zip-region-and-country")
        .previousElementSibling
        .textContent
        .trim();
    }


    var objectZipcode = document
      .querySelector("#is24-content span.zip-region-and-country")
      .textContent
      .trim();

    objectZipcode = objectZipcode.match(/(.+),/)[1].trim();

    if (objectZipcode) {
      requestForFlatText = 'Besichtigungsanfrage für die Mietwohnung: ';
      requestForFlatTextHtml = `<span style="font-size: 9pt; text-decoration: underline;">Besichtigungsanfrage</span><span style="font-size: 9pt; font-weight: normal; text-decoration: none;"> für die Mietwohnung: </span>`;

      if (objectStreetAndNumber) {
        requestForFlatText += `${objectStreetAndNumber} `;
        requestForFlatTextHtml += `${objectStreetAndNumber} `;
      }

      requestForFlatText += objectZipcode;
      requestForFlatTextHtml += objectZipcode;
    }


    var objectContactName = document.
      querySelector("#is24-expose-contact-box div[data-qa='contactName']").
      textContent.
      trim();

    var salutation = false;

    if (objectContactName) {
      if (objectContactName.match(/Herr/)) {
        salutation = 'Sehr geehrter Herr '
          + objectContactName
            .match(/.*Herr .*( .+$)/)[1]
            .trim()
          + ',';
      }

      if (!salutation) {
        if (objectContactName.match(/Frau/)) {
          salutation = 'Sehr geehrte Frau '
            + objectContactName
              .match(/.*Frau .*( .+$)/)[1]
              .trim()
            + ',';
        }
      }

      if (!salutation) {
        salutation = 'Sehr geehrte Damen und Herren,';
      }
    }


    // console.log(
    //   objectId + `\r\n`,
    //   objectScoutUrl + `\r\n`,
    //   requestForFlatText + `\r\n`,
    //   `\r\n`,
    //   salutation
    // );

    var spotForCustomTextArea = document.querySelector('#is24-content div.first-gallery-picture-container')
      .parentElement
      .parentElement
      .parentElement;

    var newCustomTextArea = document.createElement("textarea");
    newCustomTextArea.rows = '8';
    newCustomTextArea.style.width = '100%';
    // newCustomTextArea.cols = '100';
    newCustomTextArea.style.border = '1px solid black';


    newCustomTextArea.innerHTML = `${objectId}
${objectScoutUrl}
${requestForFlatText}

${salutation}
`;


    var newCustomDiv = document.createElement("div");
    newCustomDiv.style.border = '1px solid black';
    newCustomDiv.style.backgroundColor = 'white';
    newCustomDiv.style.width = '100%';
    // newCustomDiv.style.height = '12em';
    //newCustomDiv.style.height = '82em';
    newCustomDiv.style.height = '8em';

    newCustomDiv.id = 'anschreiben';
    newCustomDiv.style.overflow = 'hidden';
    //newCustomDiv.style.maxWidth = '8em';
    //newCustomDiv.style.maxHeight = '8em';
    //setClipboard


    newCustomDiv.innerHTML = `<div style="margin-bottom: 0pt; font-size: 11pt; font-family: Arial;">Familie Staven</div>
<div style="margin-bottom: 0pt; font-size: 11pt; font-family: Arial;">Bautzener Str. 9</div>
<div style="margin-bottom: 0pt; font-size: 11pt; font-family: Arial;">10820 Berlin</div>
<div style="margin-bottom: 0pt; font-size: 11pt; font-family: Arial;">&nbsp;<br></div>
<div style="margin-bottom: 0pt; font-size: 11pt; font-family: Arial; font-style: italic; text-align: right;">Berlin, 30.09.2020</div>
<div style="margin-bottom: 8pt; font-size: 10pt; font-family: Arial; font-weight: bold;"><br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; font-weight: bold;">Betreff:</div>
<div style="margin-bottom: 8pt; font-size: 10pt; font-family: Arial; font-weight: bold;">${objectId}</div>
<div style="margin-bottom: 8pt; font-size: 10pt; font-family: Arial; font-weight: bold;">${objectScoutUrl}</div>
<div style="margin-bottom: 8pt; font-size: 10pt; font-family: Arial; font-weight: bold;">${requestForFlatTextHtml}</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; font-weight: bold;"><br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">${salutation}</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">&nbsp;<br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
wir sind Familie Staven und haben über die Plattform immobilienscout24 von dieser Wohnung
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
erfahren.
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Unsere junge kleine Familie besteht aus dem einjährigen Tom, meiner Frau Johanna
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
und mir (Markus).
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">&nbsp;<br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Meine Frau ist bei einem gemeinnützigen Verein in der Familien- und Altenbetreuung tätig.
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Derzeit noch in der Elternzeit.
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">&nbsp;<br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Unser kleiner Sohn kommt ab Januar 2021 in den Kindergarten in der Alten
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Jakobstraße in Kreuzberg. Dann kann meine Frau die Arbeit wieder aufnehmen.
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Ich arbeite als Systemadministrator in Vollzeit im öffentlichen Dienst für das Land Berlin.
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">&nbsp;<br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Unter der folgenden Internetadresse können Sie unsere Bewerbungsunterlagen aufrufen:
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; font-style: italic; text-align: justify;">
<a href="https://markus-staven.de/${objectScoutId}/Familie-Staven-Mietwohnung-Bewerbung.pdf">
https://markus-staven.de/${objectScoutId}/Familie-Staven-Mietwohnung-Bewerbung.pdf
</a>
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">&nbsp;<br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Wir sind telefonisch unter 0176 62 80 45 47 oder via E-Mail info@markus-staven.de zu
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
erreichen.
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">&nbsp;<br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Wir freuen uns auf ihre Rückmeldung.
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">&nbsp;<br></div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; text-align: justify;">
Mit freundlichen Grüßen
</div>
<div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial; font-style: italic; font-weight: bold; text-align: justify;">
Familie Staven
</div>
<span style="text-decoration: none; font-family: Arial; font-style: normal; font-size: 9pt; margin: 0;">${objectScoutId}</span>`;

    /*var */spotForCustomTextArea = document.querySelector('#is24-content div.first-gallery-picture-container')
      .parentElement
      .parentElement
      .parentElement;
    spotForCustomTextArea.append(newCustomDiv);


    if (spotForCustomTextArea) {
      spotForCustomTextArea.append(newCustomTextArea);
    }



    //newCustomDiv.addEventListener('onclick', setClipboard(document.querySelector('#anschreiben').innerHTML));
    //newCustomDiv.addEventListener('onclick', setClipboard(document.querySelector('#anschreiben').innerText));

    //copyElementToClipboard(document.body);
    //copyElementToClipboard('myImageId');
    newCustomDiv.addEventListener('onclick', copyElementToClipboard('anschreiben'));
    //copyElementToClipboard('anschreiben');


    /**/

    document.querySelector('h4[data-qa="is24qa-services-passend-zur-wohnung-label"]').style.display = 'none';

    document.querySelector('#is24-content div.criteriagroup.collapsibleContainer.one-whole').style.display = 'none';

    document.querySelector('div[data-qa="is24-ad-function-box"]').style.display = 'none';

    document.querySelector('#is24-content div.grid.gutter-vertical-xl.flex.flex--wrap')
      .innerHTML = '';

    document.querySelector('#is24-content #expose-media-availability-container')
      .parentElement
      .innerHTML = '';

    document.querySelector('#is24-content div[data-ng-controller="RemovalZipcodeLeadEntryController"]')
      .parentElement
      .parentElement
      .innerHTML = '';

    document.querySelector('#is24-content').lastElementChild.innerHTML = '';

    document.querySelector('#is24-footer').innerHTML = '';


  });
}
