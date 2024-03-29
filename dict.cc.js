// ==UserScript==
// @name         Focused or minimalist design for dict.cc
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make the look of the website minimalist or focused
// @author       nnars
// @match        https://www.dict.cc/*
// @icon         https://www4.dict.cc/img/favicons/favicon4.png
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    if (document.location.hostname.match(/dict\.cc/)) {
        document.querySelector('#maincontent > form > table td').style.display = 'none';
        document.getElementById('langbar').style.display = 'none';
        document.getElementById('maincontent').style.marginLeft = 0;
        document.querySelector('div.orangebar').style.display = 'none';
        document.querySelector('div.subnav').style.display = 'none';
        if (location.search.match('s=')) {
            document.querySelector('#shst').style.display = 'none';
            document.querySelector('#inotherlangs').style.display = 'none';
            document.querySelectorAll('#maincontent > table tbody tr')[1].style.display = 'none';
            document.querySelectorAll('#maincontent > table tbody tr')[2].style.display = 'none';
            document.querySelector('#mi1').previousSibling.previousSibling.style.display = 'none';
            document.querySelector('#mi1').style.display = 'none';
            document.querySelector('#mi2').style.display = 'none';
            document.querySelector('#mi2').nextSibling.style.display = 'none';
            document.querySelector('#mi2').nextSibling.nextSibling.style.display = 'none';
            Array.from(document.querySelectorAll('div.aftertable')).forEach(e => { e.style.display = 'none'; });
            Array.from(document.querySelectorAll('td.td7cml')).forEach(e => { e.style.width = '44px'; });
            Array.from(document.querySelectorAll('td.td7cmr')).forEach(e => { e.style.width = '44px'; });
            document.getElementById('tr1').parentNode.parentNode.setAttribute('width', '606');
            document.getElementById('inotherlangs').nextSibling.nextSibling.style.width = '603px';
            document.getElementById('tr1').parentNode.parentNode.nextSibling.nextSibling.setAttribute('width', '606');
            document.getElementById('tr1').parentNode.parentNode.nextSibling.nextSibling.nextSibling.style.display = 'none';
        } else {
            Array.from(document.querySelectorAll('#maincontent > div')).forEach(e => { e.style.display = 'none'; });
            Array.from(document.querySelectorAll('#maincontent > table')).forEach(e => { e.style.display = 'none'; });
            Array.from(document.querySelectorAll('#maincontent > img')).forEach(e => { e.style.display = 'none'; });
        }
    }
})();
