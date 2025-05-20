// ==UserScript==
// @name         1337x.to button direct search
// @namespace    http://tampermonkey.net/
// @version      2025-05-20
// @description  Add a direct link button to search the movie on 1337x.to
// @author       S1NJED
// @match        https://letterboxd.com/film/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=letterboxd.com
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

	const p = document.createElement("p");
    const link = document.createElement("a");
    link.textContent = "1337x.to";
	p.style.textAlign = "center";

    const URL = document.URL;
    const formattedMovieName = URL.replace("https://letterboxd.com/film/", "").slice(0, -1).replaceAll('-', '+');
	const URL_1337x = `https://1337x.to/search/${formattedMovieName}/1/`;
	link.href = URL_1337x;
	link.target = "_blank";
	p.appendChild(link);

    const div = await new Promise((resolve) => {
        const interval = setInterval(() => {
            const servicesDiv = document.querySelector("section.services");
            if (servicesDiv)
            {
                clearInterval(interval);
                resolve(servicesDiv);
            }
        }, 300);
    });

    div.appendChild(p);

})();