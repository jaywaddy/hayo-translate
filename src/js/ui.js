// App buttons
const clearBtn = document.querySelector('.clear');
const copyBtn = document.querySelector('.copy');

// Nav links
const homeLink = document.querySelector('.translate-link');
const dictLink = document.querySelector('.dictionary-link');
const aboutLink = document.querySelector('.about-link');

// Pages
const homePage = document.querySelector('.translator-box');
const dictPage = document.querySelector('.dictionary-box');
const aboutPage = document.querySelector('.about-box');

// Elements
const letterTabs = document.querySelector('.letter-tabs');
const searchInput = document.querySelector('.search input');
const searchIcon = document.querySelector('.search-icon circle');
const cover = document.querySelector('.cover');

window.onload = () => {
    input.focus();
    loadURLvar();
    dictionary();
    fadeIn();
    setInterval(() => runApp(), 100);
}

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
    const home = homeLink.firstElementChild.classList;
    const dict = dictLink.firstElementChild.classList;
    const about = aboutLink.firstElementChild.classList;

    if (window.location.hash === '' || window.location.hash === '#translate') {
        home.add('active-link');
        dict.remove('active-link');
        about.remove('active-link');

        remove(aboutPage);
        remove(dictPage);
        show(homePage);

    } else if (window.location.hash === '#dictionary') {
        home.remove('active-link');
        dict.add('active-link');
        about.remove('active-link');

        remove(homePage);
        remove(aboutPage);
        show(dictPage);

    } else if (window.location.hash === '#about') {
        home.remove('active-link');
        dict.remove('active-link');
        about.add('active-link');

        remove(homePage);
        remove(dictPage);
        show(aboutPage);
    }
}

function fadeIn() {
    cover.style.opacity = '0';
    setTimeout(() => cover.style.display = 'none', 200);
}

function newPage() {
    cover.style = 'disply: auto';
    cover.style.opacity = '1';
    loadURLvar();
    setTimeout(() => fadeIn(), 200);
}

function show (element) {
    element.style = 'display: auto';
}

function remove (element) {
    element.style = 'display: none';
}

function dictionary() {
    const letter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let letterCount;

    // Display letter tabs
    for (let i = 0; i < letter.length; i++) {
        const newDiv = document.createElement('div');
        const newSpan = document.createElement('span');
        const div = letterTabs.appendChild(newDiv);
        const span = div.appendChild(newSpan);

        span.innerText = letter[i].toUpperCase();
        span.classList.add('t12');

        div.addEventListener('click', function() {
            const active = document.querySelector('.active-tab');
            const cardWrapper = letterTabs.nextElementSibling;
            const createDiv = document.createElement('div');

            let iterates = 0;

            cardWrapper.innerHTML = '';
            letterCount = 0;

            active.classList.remove('active-tab');
            this.classList.add('active-tab');

            // Load dictionary content
            for (let j = 0; j < App.data.length; j++) {
                iterates += 1;
                if (App.data[j].eng.charAt(0).toLowerCase() === letter[i]) {
                    letterCount += 1;
                    loadCards();
                    console.log(iterates)
                }

                function loadCards() {
                    const card = cardWrapper.appendChild(createDiv);

                    for (let i = 0; i < iterates.length; i++) {
                        card.innerHTML = `
                        <div class="card">
                            <div class="eng">
                                <small class="t12">English</small>
                                <span class="t30">${App.data[iterates].eng}</span>
                                <em>(n)</em>
                            </div>
                            <div class="plc">
                                <small class="t12">Planco</small>
                                <span class="t30">hayo</span>
                                <em>ha-yo</em>
                            </div>
                        </div>
                        `
                    }
                }
            }
        });
    }

    letterTabs.firstElementChild.classList.add('active-tab');
}