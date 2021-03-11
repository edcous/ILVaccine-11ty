onLoadRestore()
function onLoadRestore(){
    const fontSize = localStorage.getItem("textsize");
    $("#all").css("fontSize", fontSize);
    const contrast = localStorage.getItem("inverted")
    $("#all").css("filter", contrast);
}
function increaseText() {
    var fontSize = $("#all").css("fontSize");
    fontSize = parseInt(fontSize) + 2 + "px";
    $("#all").css("fontSize", fontSize);
    localStorage.setItem("textsize", fontSize)
}
function decreaseText() {
    var fontSize = $("#all").css("fontSize");
    fontSize = parseInt(fontSize) - 2 + "px";
    $("#all").css("fontSize", fontSize);
    localStorage.setItem("textsize", fontSize)
}
function enableHighContrast() {
    var contrast = $("#all").css("filter");
    if(contrast != "invert(1)"){
        $("#all").css("filter", "invert(1)");
        localStorage.setItem("inverted", "invert(1)")
    }
    else{
        $("#all").css("filter", "");
        localStorage.setItem("inverted", "")
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
