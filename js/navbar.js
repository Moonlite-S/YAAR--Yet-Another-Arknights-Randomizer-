var divs = ["Operator", "Levels", "RuleSettings", "Randomize"];
var visibleTabs = null;

function tabVisible(tab) {
    if (visibleTabs == tab) 
        visibleTabs = null;
    else   
        visibleTabs = tab;
    hideOtherTabs();
}

function hideOtherTabs() {
    var div;
    for(t of divs) {
        div = document.getElementById(t);
        if (visibleTabs === t)
            div.style.display = "block";
        else
            div.style.display = "none";
    }
}