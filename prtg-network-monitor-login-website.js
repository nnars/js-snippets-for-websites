'use strict';

// PRTG Network Monitor - Login website

// --- change/customize here --- START --- (examples)
// const hostname = /10\.20\.100\.200/;
const hostname = /domain\.tld/;
// --- change/customize here --- END ---

if (document.location.hostname.match(hostname)) {
	
	// --- change/customize here --- START --- (example)
	// const loginUserName = 'domain\\username';
	// --- change/customize here --- END ---
	
	const inputElementUserName = 'loginusername';
	const inputElementPassword = 'loginpassword';
	
	document.onreadystatechange = function () {
	    if (document.readyState == 'complete') {
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
}
