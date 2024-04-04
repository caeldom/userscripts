// ==UserScript==
// @name         MDBG customisations
// @version      1.0
// @description  Customise MDBG table views etc
// @author       Dan Lim
// @match        https://www.mdbg.net/chinese/dictionary?*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mdbg.net
// @grant        none
// @updateURL    https://github.com/caeldom/userscripts/raw/main/mdbg-customisations.user.js
// @downloadURL  https://github.com/caeldom/userscripts/raw/main/mdbg-customisations.user.js
// ==/UserScript==

(function tryFindElement() {
    'use strict';
    let colHeader, cellIndex;
    let table = $('table.wordresults');
    if (table.length) {
        // move the Traditional column header next to Simplified
        colHeader = table.find('thead th:contains(Traditional)');
        cellIndex = colHeader[0].cellIndex;
        colHeader.each(function() {
            $(this).insertAfter($(this).siblings('.first'))
                .css('text-align', 'left');
        });

        // move the Traditional column words next to Simplified
        table.find('tr.row').each(function() {
            $(this).children('td:eq('+cellIndex+')')
                .insertAfter($(this).children('.head'))
                .css('text-align', 'left');
        });

        // move the pronunciation button + customise pinyin
        table.find('tr.row td.actions').each(function() {
            $(this).find('a[title^=Listen]')
                .insertBefore($(this).closest('tr.row').find('.pinyin a').css('font-size', '70%'))
                .css({'vertical-align': 'middle', 'margin-right': '0.1em'});
        });
    } else {
        setTimeout(tryFindElement, 300);
    }
})();