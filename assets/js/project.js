$(document).ready(function() {
    $('.venobox').venobox({
        bgcolor: 'white',
        border: '0',
        share: ['facebook', 'twitter', 'linkedin'], // default: []
        titleattr: 'image',
        framewidh: '80%',
        frameheight: '90vh',
        // arrowsColor: 'orange'


    });
});


/* -------------------- filter ------------------- */



(function() {
    const buttons = document.querySelectorAll('.btnfilter');
    const storeItems = document.querySelectorAll('.project-item');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            storeItems.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });

        });

    });
})();

/* ----------------- card seacrch filter ---------------- */
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('search').addEventListener('keyup', function() {
//         let filterRegex = new RegExp('\\b' + this.value, 'gi');

//         document.querySelectorAll('.cardscss').forEach(function(item) {
//             item.classList.toggle('search-hide', !item.innerText.match(filterRegex));
//         });
//     });
// });




/* ------------------ openReleaseFiles ------------------ */
function displayRelease() {
    const h = document.querySelector("body > div.vbox-overlay > div.vbox-container > div > div > div > div.releaseHide ")
    h.style.display = (h.style.display != 'none') ? 'none' : 'block';
    h.style.width = '70vw';
    h.style.height = '600px';

}

function hideRelease() {
    const none = document.querySelector("body > div.vbox-overlay > div.vbox-container > div > div > div > div.beforeRelease > div.img-container")
    none.style.display = (none.style.display != 'block') ? 'block' : 'none';

    displayRelease()

}