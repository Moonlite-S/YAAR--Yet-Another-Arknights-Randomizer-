/* Deselects manually (one by one) */
$(".opCard").on('click', (function() { $(this).toggleClass("deselected"); }));

$(".opClass").on('click', (function() { $(this).toggleClass("opClassToggle"); }));