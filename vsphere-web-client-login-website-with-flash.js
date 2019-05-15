// ==UserScript==
// @name     vrealize-operations-manager-login-website.js
// @version  1
// @grant    none
// @author   nnars
// ==/UserScript==
'use strict';

// vSphere Web Client - Login website (flash version)

// --- change/customize here --- START --- (examples)
// const hostname = /10\.20\.100\.200/;
// const hostname = /domain\.tld/;
// --- change/customize here --- END ---

if (document.location.hostname.match(hostname)) {
	
	// --- change/customize here --- START --- (example)
	// const loginUserName = 'domain\\username';
	// --- change/customize here --- END ---
	
	const iframeElementLogin = 'websso';
	const inputElementUserName = 'username';
	const inputElementPassword = 'password';
	alert('test');
	document.onreadystatechange = function () {
	    if (document.readyState == 'complete') {
	    	
	    	$( ('#' + iframeElementLogin) ).ready(function() {

		    	const iframeElement = document.getElementById(iframeElementLogin);
		    	
		    	if (iframeElement) {
		    		const usernameElement = iframeElement.contentDocument.getElementById(inputElementUserName)
		    		
		    		if (usernameElement) {
		    			iframeElement.contentDocument.getElementById(inputElementUserName).value = loginUserName;
		    		} else {
		    			console.log(`usernameElement with id ${inputElementUserName} not found!`);
		    		}
		    		
		    		const passwordElement = iframeElement.contentDocument.getElementById(inputElementPassword)
		    		
		    		if (passwordElement) {
		    			iframeElement.contentDocument.getElementById(inputElementPassword).focus();
		    		} else {
		    			console.log(`passwordElement with id ${inputElementPassword} not found!`);
		    		}
		    	} else {
		    		console.log(`iframeElement with id ${iframeElementLogin} not found!`);
		    	}
	    	
	    	});

	    }
	}

}
