let mobile;
let html;
let navBar_open;
let navBar;

//load
function load(){
    getUI();
    setThemeByTime();
    setMobile();
    window.onresize = setMobile;
    navBar_open = false;
}

//set if small device
function setMobile(){mobile = getSmallDevice();}

//set theme
function setThemeByTime(){
    let d = new Date();
    if(d.getHours() < 22) setLightTheme();
    else setDarkTheme();
}

function changeTheme(){
    if(html.getAttribute("data-theme") == "light") setDarkTheme();
    else setLightTheme();
}

function setDarkTheme(){
    html.setAttribute("data-theme", "dark");
    let images = document.querySelectorAll(".themeImg");
    images.forEach(img => {
        img.setAttribute("src","img/dark-theme/" + img.getAttribute("data-src"));
    });
}

function setLightTheme(){
    html.setAttribute("data-theme", "light");
    let images = document.querySelectorAll(".themeImg");
    images.forEach(img => {
        img.setAttribute("src","img/light-theme/" + img.getAttribute("data-src"));
    });
}


//get UI elements
function getUI(){
    navBar = document.querySelector("#navBar");
    html = document.querySelector("html");
}

//get small devices
function getSmallDevice(){
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    let small = window.innerWidth < 700;
    let mobile = toMatch.some((toMatchItem) => {return navigator.userAgent.match(toMatchItem);});
    return mobile || small;
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
    if(mobile) navBar.style.left = "-100%";
    else  navBar.style.left = '-400px';

    navBar_open = false;
}