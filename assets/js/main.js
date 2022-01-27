/*----------------------------------------------------------------------------------------*/
//                                 Letter Animation Introduction

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Mining Engineer", "Frelancer", "Web Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


/*----------------------------------------------------------------------------------------*/
//                                ButtonToogle pdf View


// Agregar Vista de pdf desde el About

const pdfView = document.querySelector("#aboutme > div.section-heading > h2");
const classpdf = document.querySelector("#pdfView").classList
pdfView.addEventListener('click', function() {
    const result = classpdf.toggle("pdfviewHide");
})




function changeView() {

    const buttonA = document.querySelector(".aboutme-description");
    const ValueA = document.querySelector(".aboutme-description").classList.contains("col-md-6")

    buttonA.classList.toggle("col-md-6")
    buttonA.style.padding = "10px 10px 10px 10px"
}


function colortg() {

    // Cambia de color el pdficon y agrega la clase pdfjs


    var element = document.querySelector(".bx.bxs-file-pdf");
    element.classList.toggle("pdfjs");



    // Oculta el logo
    var logo = document.querySelector(".uncp-logo")
    elem = logo
    elem.style.display = (elem.style.display != 'none') ? 'none' : 'block';

    //Show PDF
    const pdfView = document.querySelector("#pdfView")
    pdfView.style.display = (pdfView.style.display != 'block') ? 'block' : 'none';

    // Change la vista de pdf

    changeView()

}