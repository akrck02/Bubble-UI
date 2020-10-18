let mobile;
let navBar_open;
let navBar;

//load
function load(){
    setMobile();
    window.onresize = setMobile;
    navBar_open = false;
    getUI();
}

//set if small device
function setMobile(){mobile = getSmallDevice();}

//get UI elements
function getUI(){
    navBar = document.querySelector("#navBar");
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