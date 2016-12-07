$(document).ready(function () {
    // Load internationalized messages for chrome extensions.
    $('.i18n').each(function () {
        var i18nText = chrome.i18n.getMessage($(this).attr('id').toString());
        if (!i18nText) {
            console.log("Debug message. Text not found for id" + $(this).attr('id'));
            return;
        }
        if ($(this).prop('tagName') == 'IMG') {
            $(this).attr({ 'title': i18nText });
        }
        else {
            $(this).text(i18nText);
        }
    });
});
