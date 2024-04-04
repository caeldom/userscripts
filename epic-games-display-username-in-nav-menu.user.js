// ==UserScript==
// @name         Epic Games Display Username In Nav Menu
// @version      1.0
// @description  Display username in nav menu
// @author       Dan Lim
// @match        https://*.epicgames.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=epicgames.com
// @updateURL    https://github.com/caeldom/userscripts/raw/main/epic-games-display-username-in-nav-menu.user.js
// @downloadURL  https://github.com/caeldom/userscripts/raw/main/epic-games-display-username-in-nav-menu.user.js
// ==/UserScript==

(function() {
    'use strict';

    // display username
    (function displayUsername() {
        let accountButton = $($('egs-navigation,eos-navigation')[0]?.shadowRoot).find('button[aria-controls="nav-account-menu"]');
        if (accountButton.length) {
            accountButton.children()[0].style.marginRight = '.8em';
            accountButton[0].style.alignItems = 'center';
            accountButton[0].insertAdjacentText('beforeend', accountButton.attr('title'));
        } else {
            setTimeout(displayUsername, 300);
        }
    })();
})();