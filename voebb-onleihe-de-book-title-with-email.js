'use strict';
if (document.location.hostname.match(/voebb\.onleihe\.de/)) {
  document.addEventListener("DOMContentLoaded", function(event) {
    
    // --- Edit your e-mail here - START ---
    const email = 'somebody@somewhere.com';
    // --- Edit your e-mail here - END ---

    /*
      document.querySelector("#header-banner-nav > ul").style.display = 'none';
      document.querySelector("#header-banner-nav").style.height = '2.3rem';
      document.querySelector("#main > div.pagebox > footer").style.display = 'none';
    */

    /*
      var headerEl = document.querySelector("#main > header > div > div.row-4 > div > div");
      if (headerEl) { headerEl.style.height = '25px'; }

      var headerBanner = document.querySelector("#header-banner-nav > ul");
      if (headerBanner) { headerBanner.style.height = '0'; }

      var footerEl = document.querySelector("footer")
      if (footerEl) {
        footerEl.style.height = '0';
        footerEl.style.display = 'none';
      }
    */

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
