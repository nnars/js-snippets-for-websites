
'use strict';
if (document.location.hostname.match(/www\.immobilienscout24\.de/)) {
  document.addEventListener("DOMContentLoaded", function (event) {

    var objectId = document
      .querySelector("#is24-content div.is24-scoutid__content")
      .textContent
      .trim();


    var objectScoutId = false;
    var objectScoutUrl = false;

    if (objectId) {
      var objectScoutId = objectId
        .replace(/.*Scout-ID:/, '')
        .trim();

      if (objectScoutId) {
        objectScoutUrl = `https://www.immobilienscout24.de/expose/${objectScoutId}`
      }
    }


    var requestForFlatText = false;
    var requestForFlatTextHtml = false;

    var objectStreetAndNumber = document
      .querySelector("#is24-content span.zip-region-and-country")
      .previousElementSibling
      .textContent
      .trim();


    var objectZipcode = document
      .querySelector("#is24-content span.zip-region-and-country")
      .textContent
      .trim();

    objectZipcode = objectZipcode.match(/(.+),/)[1].trim();

    if (objectZipcode) {
      requestForFlatText = 'Besichtigungsanfrage für die Mietwohnung: ';
      requestForFlatTextHtml = `<span style="text-decoration: underline;">Besichtigungsanfrage</span><span style="font-weight: normal; text-decoration: none;"> für die Mietwohnung: </span>`;

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


    var spotForCustomTextArea = document.querySelector('#is24-content div.first-gallery-picture-container')
      .parentElement
      .parentElement
      .parentElement;

    var newCustomTextArea = document.createElement("textarea");
    newCustomTextArea.rows = '8';
    newCustomTextArea.style.width = '100%';
    // newCustomTextArea.cols = '100';
    newCustomTextArea.style.border = '1px solid black'

    newCustomTextArea.innerHTML = `${objectId}
${objectScoutUrl}
${requestForFlatText}

${salutation}
`;


    var newCustomDiv = document.createElement("div");
    newCustomDiv.style.border = '1px solid black';
    newCustomDiv.style.backgroundColor = 'white';
    newCustomDiv.style.width = '100%';
    newCustomDiv.style.height = '12em';

    newCustomDiv.innerHTML = `<div style="margin-bottom: 8pt; font-size: 10pt; font-family: Arial; font-weight: bold;">${objectId}</div>
                              <div style="margin-bottom: 8pt; font-size: 10pt; font-family: Arial; font-weight: bold;">${objectScoutUrl}</div>
                              <div style="margin-bottom: 8pt; font-size: 10pt; font-family: Arial; font-weight: bold;">${requestForFlatTextHtml}</div>
                              <div style="margin-bottom: 8pt; font-size: 10pt; font-family: Arial; font-weight: bold;"><br></div>
                              <div style="margin-bottom: 8pt; font-size: 11pt; font-family: Arial;">${salutation}</div>
    `;

    /*var */spotForCustomTextArea = document.querySelector('#is24-content div.first-gallery-picture-container')
      .parentElement
      .parentElement
      .parentElement;
    spotForCustomTextArea.append(newCustomDiv);


    if (spotForCustomTextArea) {
      spotForCustomTextArea.append(newCustomTextArea);
    }


  });
}
