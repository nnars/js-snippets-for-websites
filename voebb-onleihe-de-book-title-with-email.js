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
    
    /*
    var article_info = document.querySelector("#main > div.pagebox > div > main > div > div.row-2 > div > article > div.article-info > div.article-info-top");
    if (article_info) {

      var bookTitleEl = document.querySelector("#main > div.pagebox > div > main > div > div.row-2 > div > article > div.article-info > div.article-info-top > div.title-name");
      var sBookTitle = '';
      if (bookTitleEl) {
        sBookTitle = bookTitleEl.lastChild.textContent.trim();
      }

      var bookSubtitleEl = document.querySelector("#main > div.pagebox > div > main > div > div.row-2 > div > article > div.article-info > div.article-info-top > div.subtitle");
      var sbookSubtitle = '';
      if (bookSubtitleEl) {

        if (bookSubtitleEl.textContent.trim() !== 'Untertitel:') {
          sbookSubtitle = bookSubtitleEl.lastChild.textContent.trim();
        }

      }

      var publishingDateEl = document.querySelector("#main > div.pagebox > div > main > div > div.row-2 > div > article > div.article-info > div.article-info-top > div.publishing-date");
      var spublishingDate = '';
      if (publishingDateEl) {
        spublishingDate = publishingDateEl.lastChild.textContent.trim();
      }


      var copyTitleBtn = document.createElement("button");
      copyTitleBtn.textContent = 'copy title';
      copyTitleBtn.style.border = '2px solid black';
      copyTitleBtn.style.margin = '0 5px 0 0';
      copyTitleBtn.style.backgroundColor = 'antiquewhite';
      copyTitleBtn.style.padding = '4px 8px';
      copyTitleBtn.style.fontFamily = 'monospace';
      copyTitleBtn.style.borderRadius = '8px';
      copyTitleBtn.style.fontWeight = 'bold';
      copyTitleBtn.value = (sBookTitle + ' (' + spublishingDate + ') ' + sbookSubtitle).trim();
      copyTitleBtn.addEventListener('click', fCopyTitle);


      article_info.prepend(copyTitleBtn);

    }
    
    function fCopyTitle() { 

      var bookFullTitle = sBookTitle + ' (' + spublishingDate + ') ' + sbookSubtitle;
      updateClipboard(bookFullTitle);

    }

    function updateClipboard(newClip) {
      navigator.clipboard.writeText(newClip).then(function() {
        // clipboard successfully set
      }, function() {
        // clipboard write failed
      });
    }
    */    
    
  });
}
