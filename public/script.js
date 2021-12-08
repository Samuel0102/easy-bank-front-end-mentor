function showMenu(){
    // getting dom elements
    let hamburgerIcon = document.getElementById("hamburger-icon");
    let hiddenMenu = document.getElementById("hidden-nav");

    // verifing if the menu is or isnt showing at the click of the icon
    if (hiddenMenu.style.display === "none"){
        hiddenMenu.style.display = "block";
        hamburgerIcon.setAttribute("src", "assets/icon-close.svg");
    }else{
        hiddenMenu.style.display = "none";
        hamburgerIcon.setAttribute("src", "assets/icon-hamburger.svg");
    }
}

