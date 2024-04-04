// ==UserScript==
// @name         Gmail Highlight Starred
// @version      2.0
// @description  Highlight emails when they are starred
// @author       Dan Lim
// @match        https://mail.google.com/mail/u/*
// @require      https://cdn.jsdelivr.net/npm/cash-dom/dist/cash.min.js
// @icon         https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico
// @updateURL    https://github.com/caeldom/userscripts/raw/main/gmail-highlight-starred.user.js
// @downloadURL  https://github.com/caeldom/userscripts/raw/main/gmail-highlight-starred.user.js
// ==/UserScript==

(function() {
    'use strict';

    // initialise a mutation observer on the inbox container
    (function initObserver() {
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        let inboxContainer = $('div.AO')[0];

        if (inboxContainer && MutationObserver) {
            let mutationObserver = new MutationObserver((records, observer) => {
                highlightStarred();
                // only trigger once then reset observer to reduce redundant calls
                observer.disconnect();
                initObserver();
            });
            // check when aria label attribute on element changes to trigger
            mutationObserver.observe(inboxContainer, { childList:true, subtree: true, attributes: true, attributeFilter: ['aria-label'] });
        } else {
            // wait until the element exists
            setTimeout(initObserver, 300);
        }
    })();

    function highlightStarred() {
        console.log("Highlighting starred emails");
        // uses cash instead of jquery
        // highlight yellow starred
        $('span.T-KT.T-KT-Jp').closest('tr').css('backgroundColor', 'rgb(98,82,40,0.6)');

        // highlight red starred
        $('span.T-KT.xn').closest('tr').css('backgroundColor', 'rgb(219,68,55,0.5)');

        // un-highlight not starred
        $('span.T-KT.aXw').closest('tr').removeAttr('style');
    }
})();