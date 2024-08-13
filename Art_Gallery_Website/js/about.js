// about.js

$(document).ready(function() {
    // Initialize the accordion
    $("#accordion").accordion({
        heightStyle: "content",
        active: false,
        collapsible: true,
        icons: {
            "header": "ui-icon-plus",
            "activeHeader": "ui-icon-minus"
        }
    });
});
