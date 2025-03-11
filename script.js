document.getElementById("menuButton").addEventListener("click", function() {
    let menu = document.getElementById("menuList");
    let menuButt  = document.getElementById("menuButton");

    if(menuButt.style.display != "none"){
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }

    
});

window.addEventListener("resize", function() {
    let menu = document.getElementById("menuList");
    if (window.innerWidth > 795) {
        menu.style.display = "none";
    }
});