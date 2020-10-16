let navBar_open;
let navBar;

//load
function load(){
    navBar_open = false;
    getUI();
}

//get UI elements
function getUI(){
    navBar = document.querySelector("#navBar");
}

//updateNavbar
function updateNavbar(){
    if(!navBar_open) openNavBar();
    else closeNavBar();
}

//open navbar
function openNavBar(){
    navBar.style.left = '0';
    navBar_open = true;
}

//close navbar
function closeNavBar(){
    navBar.style.left = '-400px';
    navBar_open = false;
}