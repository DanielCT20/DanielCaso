const darkMode = document.querySelector(".dmode");

function ChangeIcon() {
    const moon = document.querySelector(".toggleSun")
    moon.classList.toggle("sun");
    changeStyle();
}


darkMode.addEventListener("click", ChangeIcon);

// ChangeIcon();


/* ----------------- Selectores inciales ---------------- */

var rootElement = document.documentElement;


var verde = 'green';



const lightStyle = {
    bgGeneral: "#f4f4f4",
    white: "white",
    black: "black",
    cardColor: "white",
    borderCard: "white",
    hoverColor: "#dc143c",
    headerBefore: "#ddd",
    shadowDM: '2.4px 4.8px 4.8px hsl(0deg 0% 0% / 0.43)'
}


const darkStyle = {
    bgGeneral: "rgb(39, 39, 56)",
    white: "rgb(45, 45, 59)",
    black: "white",
    cardColor: "rgb(45, 45, 59)",
    borderCard: "white",
    hoverColor: "#dc143c",
    headerBefore: "#ddd",
    shadowDM: '1px 1px 10px 1px rgba(255,255,255,1)'
}



/* ----------------- change contentcolor ---------------- */

var statusA = 0; // 0 = Dark mode, 1 = Light mode

function changeStyle() {
    if (statusA == 0) {
        rootElement.style.setProperty('--bg-general', darkStyle.bgGeneral);
        rootElement.style.setProperty('--white', darkStyle.white);
        rootElement.style.setProperty('--black', darkStyle.black);
        rootElement.style.setProperty('--cardColor', darkStyle.cardColor);
        rootElement.style.setProperty('--borderCard', darkStyle.borderCard);
        rootElement.style.setProperty('--hover-color', darkStyle.hoverColor);
        rootElement.style.setProperty('--headerBefore', darkStyle.headerBefore);
        rootElement.style.setProperty('--shadowLM', darkStyle.shadowDM);
        statusA = 1;
    } else if (statusA == 1) {
        rootElement.style.setProperty('--bg-general', lightStyle.bgGeneral);
        rootElement.style.setProperty('--white', lightStyle.white);
        rootElement.style.setProperty('--black', lightStyle.black);
        rootElement.style.setProperty('--cardColor', lightStyle.cardColor);
        rootElement.style.setProperty('--borderCard', lightStyle.borderCard);
        rootElement.style.setProperty('--hover-color', lightStyle.hoverColor);
        rootElement.style.setProperty('--headerBefore', lightStyle.headerBefore);
        rootElement.style.setProperty('--shadowLM', lightStyle.shadowDM);
        statusA = 0;
    }
}