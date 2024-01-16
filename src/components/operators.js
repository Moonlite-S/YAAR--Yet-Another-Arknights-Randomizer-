
var classes = document.getElementsByClassName("opClass");

/* Toggles a character manually (one by one) */
$(".opCard").on('click', (function() { $(this).toggleClass("deselected"); }));

/* Toggles an entire class of characters */
$(".opClass").on('click', (function() { $(this).toggleClass("opClassToggle"); }));

/* Turns On ALL CHARACTERS AND CLASSES */
$(".oCOn").on('click', function() {
    for (element of classes) {
        findClass = $(element).attr('class');
        if (findClass.includes("opClassToggle"))
            $(element).toggleClass("opClassToggle");
    }
});

$(".oCOff").on('click', function() {
    for (element of classes) {
        findClass = $(element).attr('class');
        if (!findClass.includes("opClassToggle"))
            $(element).addClass("opClassToggle");
    }
});

