// ==UserScript==
// @name         Gmail Highlight Starred
// @version      1.0
// @description  Highlight emails when they are starred
// @author       Dan Lim
// @match        https://mail.google.com/mail/u/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://cdn.jsdelivr.net/npm/jquery.initialize@1.3.0/jquery.initialize.min.js
// @icon         https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico
// ==/UserScript==

(function() {
    'use strict';

    // highlight yellow starred
    $.initialize(
        'span[aria-label="Starred"]',
        function () { $(this).closest('tr').css('backgroundColor', 'rgb(98,82,40,0.6)') }
    );

    // highlight red starred
    $.initialize(
        'span[aria-label="Starred with \\"red-star\\""]',
        function () { $(this).closest('tr').css('backgroundColor', 'rgb(219,68,55,0.5)') }
    );

    // un-highlight
    $.initialize(
        'span[aria-label="Not starred"]',
        function () {
            $(this).closest('tr').removeAttr('style');
        }
    );

})();
