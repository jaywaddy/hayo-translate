// App buttons
const clearBtn = document.querySelector('.clear');
const copyBtn = document.querySelector('.copy');

// Nav links
const homeLink = document.querySelector('.translate-link');
const dictLink = document.querySelector('.dictionary-link');
const aboutLink = document.querySelector('.about-link');

const home = homeLink.firstElementChild.classList;
const dict = dictLink.firstElementChild.classList;
const about = aboutLink.firstElementChild.classList;

// Pages
const homePage = document.querySelector('.translator-box');
const dictPage = document.querySelector('.dictionary-box');
const aboutPage = document.querySelector('.about-box');

// Elements
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon circle');
const letterTabs = document.querySelector('.letter-tabs');
const cover = document.querySelector('.cover');

window.onload = () => {
    input.focus();
    loadURLvar();
    dictionary();
    fadeIn();
    letterTabs.firstElementChild.click();
}

// Translate feature
input.addEventListener('keyup', () => runApp());

// Search function
searchIcon.addEventListener('click', () => search());
searchInput.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        search();
    }
});

// Clear text
clearBtn.addEventListener('click', function() {
    input.value = '';
    runApp();
    setTimeout(() => input.focus(), 1);
});

// Copy button
copyBtn.addEventListener('click', () => {
    const text = document.createElement('textarea');

    document.body.appendChild(text)
    text.value = output.textContent;
    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);
});

// New page script
window.addEventListener('hashchange', function () {
    newPage();
});

// Functions
function loadURLvar() {
    if (window.location.hash === '' || window.location.hash === '#translate') {
        loadHome();
    } else if (window.location.hash === '#dictionary') {
        loadDictionary();
    } else if (window.location.hash === '#about') {
        loadAbout();
    }
}

function search() {
    for (let i = 0; i < App.data.length; i++) {
        if (App.data[i].eng.toLowerCase() == searchInput.value.toLowerCase()) {
            loadDictionary();
            console.log('load searchInput card only');
        }
    }
}

function newPage() {
    cover.style = 'disply: auto';
    cover.style.opacity = '1';
    loadURLvar();
    setTimeout(() => fadeIn(), 200);
}

function dictionary() {
    const letter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < letter.length; i++) {
        const newDiv = document.createElement('div');
        const newSpan = document.createElement('span');
        const div = letterTabs.appendChild(newDiv);
        const span = div.appendChild(newSpan);

        // Display letter tabs
        span.innerText = letter[i].toUpperCase();
        span.classList.add('t12');

        div.addEventListener('click', function() {
            const active = document.querySelector('.active-tab');
            const cardWrapper = document.querySelector('.card-wrapper');

            // Relocate active tab & clear cards
            active.classList.remove('active-tab');
            this.classList.add('active-tab');
            cardWrapper.innerHTML = '';

            // Load dictionary content
            for (let j = 0; j < App.data.length; j++) {
                const card = document.createElement('div');

                let arr = [];
                
                if (App.data[j].eng.charAt(0).toLowerCase() === letter[i]) {
                    card.innerHTML = `
                    <div class="card">
                        <div class="eng">
                            <small class="t12">English</small>
                            <span class="t30">${App.data[j].eng.toLowerCase()}</span>
                            <em>${App.data[j].pos}</em>
                        </div>
                        <div class="plc">
                            <small class="t12">Planco</small>
                            <span class="t30">${App.data[j].plc.toLowerCase()}</span>
                            <em>${App.data[j].pro}</em>
                        </div>
                    </div>
                    `
                    arr.push(card);

                    for (n = 0; n < arr.length; n ++) {
                        cardWrapper.appendChild(arr[n]);
                    }
                }

                
            } // End of App.data.length loop
        }); // End of click event listener
    } // End of letter.length loop

    letterTabs.firstElementChild.classList.add('active-tab');
} // End of dictionary()

function loadHome() {
    home.add('active-link');
    dict.remove('active-link');
    about.remove('active-link');
    remove(aboutPage);
    remove(dictPage);
    show(homePage);
}

function loadDictionary() {
    home.remove('active-link');
    dict.add('active-link');
    about.remove('active-link');
    remove(homePage);
    remove(aboutPage);
    show(dictPage);
}

function loadAbout() {
    home.remove('active-link');
    dict.remove('active-link');
    about.add('active-link');
    remove(homePage);
    remove(dictPage);
    show(aboutPage);
}

function show (element) {
    element.style = 'display: auto';
}

function remove (element) {
    element.style = 'display: none';
}

function fadeIn() {
    cover.style.opacity = '0';
    setTimeout(() => cover.style.display = 'none', 200);
}