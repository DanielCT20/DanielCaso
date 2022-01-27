/* ------------------- Preloader code ------------------- */
var loader = document.getElementById("preloader");
window.addEventListener("load",
    setTimeout(myPage, 1000))

function myPage() {
    loader.style.display = 'none';
}