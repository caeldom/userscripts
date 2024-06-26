// ==UserScript==
// @name         Google Calendar UI Changes
// @version      1.1
// @description  Changes to improve UI
// @author       Dan Lim
// @match        https://calendar.google.com/*
// @icon         https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_1.ico
// @require      https://cdn.jsdelivr.net/npm/cash-dom/dist/cash.min.js
// @grant        GM_addStyle
// @updateURL    https://github.com/caeldom/userscripts/raw/main/google-calendar-ui-changes.user.js
// @downloadURL  https://github.com/caeldom/userscripts/raw/main/google-calendar-ui-changes.user.js
// ==/UserScript==

(function() {
    'use strict';

    // requires "// @grant        GM_addStyle"
    GM_addStyle(`
        /* title input width */
        .kVw1pb {
            width: 100%;
        }
        input#xTiIn {
            font-size: larger;
        }
        .gyRY9e {
            flex-basis: 1%;
        }
        /* prevent covering title input */
        header.PTLZrb {
            top: 70px;
        }

        /* description input */
        div#xDescIn {
            min-height: 40vh;
        }

        /* event popup heading */
        .UfeRlc[data-text] {
            font-size: larger; /* is actually smaller size */
            padding-bottom: 10px;
            max-height: none;
            -webkit-line-clamp: unset;
        }

        /* new event popup title input */
        .tMfWZc .VfPpkd-fmcmS-wGMbrd {
            font-size: larger; /* is actually smaller size */
        }
    `);
})();
