// ==UserScript==
// @name     vrealize-operations-manager-login-website.js
// @version  1
// @grant    none
// @author   nnars
// ==/UserScript==
'use strict';

// vRealize Operations Manager - Login website

// --- change/customize here --- START --- (examples)
// const hostname = /10\.20\.100\.200/;
// const hostname = /domain\.tld/;
// --- change/customize here --- END ---

if (document.location.hostname.match(hostname)) {
	
	// --- change/customize here --- START --- (example)
	// const loginUserName = 'domain\\username';
  const authSelector = 'All vCenter Servers';
	// --- change/customize here --- END ---
	
  const inputElementAuthSelector = 'authSelector-inputEl';
	const inputElementUserName = 'userName-inputEl';
	const inputElementPassword = 'password-inputEl';
	
	document.onreadystatechange = function () {
	    if (document.readyState == 'complete') {        
				selectAuthSelector(inputElementAuthSelector, authSelector);        
				insertUsername(inputElementUserName, loginUserName);
				selectInputElement(inputElementPassword);
	    }
	}
	
	const insertUsername = function (inputElement, textContent) {
		if (document.getElementById(inputElement)) {
			//console.log(inputElement);
			document.getElementById(inputElement).value = loginUserName;
		}
	};
	
	const selectInputElement = function (inputElement) {
		if (document.getElementById(inputElement)) {
			document.getElementById(inputElement).focus();
		}
	};
	
	const selectAuthSelector = function (inputElement, textContent) {
		if (document.getElementById(inputElement)) {
			document.getElementById(inputElement).value = textContent;
		}
	};
}
