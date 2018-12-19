'use strict';

// Just fun - This script add a button on https://chocolatey.org/packages 
// to copy the code text in clipboard for easy pasting in command line (ex. Powershell)

const codes = Array.from(document.getElementsByTagName('code'), e => e);

const button = document.createElement('button');

codes.forEach((e, i) => {
  e.firstElementChild.remove();
  e.prepend(document.createElement('button'));
  e.firstElementChild.textContent = 'copy';
  e.firstElementChild.style.marginRight = '2%';
  e.firstElementChild.style.border = '0.16em solid #fff';
  e.firstElementChild.style.borderRadius = '0.4em';
  e.firstElementChild.style.padding = '0.2em 0.6em';
  e.firstElementChild.style.boxShadow = '0.12em 0.12em #ccc';
  e.onclick = () => {
    const cmdCode = ('' + e.lastChild.textContent).trim() + ' -y -v\n';

    navigator.clipboard.writeText(cmdCode).then(function() {
      /* clipboard successfully set */
    }, function() {
      /* clipboard write failed */
    });
  };
});
