'use strict';
if (document.location.hostname.match(/voebb\.onleihe\.de/)) {
  document.addEventListener("DOMContentLoaded", function(event) {
    // --- Edit your e-mail here - START ---
    const email = 'somebody@somewhere.com';
    // --- Edit your e-mail here - END ---
    
    const inputElementRecipient = document.querySelector("#pRecipient");
    if (inputElementRecipient) {
    	inputElementRecipient.value = email;
    }
    
    const inputElementConfirmedRecipient = document.querySelector("#pConfirmedRecipient");
    if (inputElementConfirmedRecipient) {
    	inputElementConfirmedRecipient.value = email;
    }
  });
}
