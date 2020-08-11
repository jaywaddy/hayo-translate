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
const letterTabs = document.querySelector('.letter-tabs');
const cover = document.querySelector('.cover');

window.onload = () => {
    input.focus();
    loadURLvar();
    runDictionary();
    fadeIn();
    letterTabs.firstElementChild.click();
}

// Translate feature
input.addEventListener('keyup', () => runApp());

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

function loadURLvar() {
    if (window.location.hash === '' || window.location.hash === '#translate') {
        loadHome();
    } else if (window.location.hash === '#dictionary') {
        loadDictionary();
    } else {
        loadAbout();
    }
}

function newPage() {
    cover.style = 'disply: auto';
    cover.style.opacity = '1';
    loadURLvar();
    setTimeout(() => fadeIn(), 200);
}

function loadLinkClass(current, old_1, old_2) {
    current.add('active-link');
    old_1.remove('active-link');
    old_2.remove('active-link');
}

function loadLinkPage(current, old_1, old_2) {
    show(current);
    remove(old_1);
    remove(old_2);
}

function loadHome() {
    loadLinkClass(home, dict, about);
    loadLinkPage(homePage, dictPage, aboutPage);
}

function loadDictionary() {
    loadLinkClass(dict, about, home);
    loadLinkPage(dictPage, aboutPage, homePage);
}

function loadAbout() {
    loadLinkClass(about, dict, home);
    loadLinkPage(aboutPage, homePage, dictPage);
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