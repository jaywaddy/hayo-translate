// App buttons.
const clearBtn = document.querySelector('.clear');
const copyBtn = document.querySelector('.copy');

// Nav links.
const homeLink = document.querySelector('.translate-link');
const dictLink = document.querySelector('.dictionary-link');
const aboutLink = document.querySelector('.about-link');

// Pages
const homePage = document.querySelector('.translator-box');
const aboutPage = document.querySelector('.about-box');

window.onload = () => {
    input.focus();
    remove(aboutPage);
    setInterval(() => runApp(), 1000);
}

// Clear text.
clearBtn.addEventListener( 'click', function() {
    input.value = '';
    runApp();
    setTimeout(() => input.focus(), 1);
});

// Copy button.
copyBtn.addEventListener('click', () => {
    let text = document.createElement('textarea');

    document.body.appendChild(text)
    text.value = output.textContent;
    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);
});

// New page script.
homeLink.firstElementChild.classList.add('active-link');

window.addEventListener('hashchange', function () {
    const url = this.location.hash;
    const home = homeLink.firstElementChild.classList;
    const dict = dictLink.firstElementChild.classList;
    const about = aboutLink.firstElementChild.classList;

    remove(aboutPage);

    // Home.
    if (url === '' || url === '#translate') {
        // Active link.
        home.add('active-link');
        dict.remove('active-link');
        about.remove('active-link');

        show(homePage);
        remove(aboutPage);
    
    } 
    
    // Dictionary.
    if (url === '#dictionary') {
        // Active link
        home.remove('active-link');
        dict.add('active-link');
        about.remove('active-link');

        remove(homePage);
        remove(aboutPage);
    }


    // About.
    if (url === '#about') {
        // Active link.
        home.remove('active-link');
        dict.remove('active-link');
        about.add('active-link');

        show(aboutPage);
        remove(homePage);
    }
}); // End new page script.

function show ( page ) {
    page.style = 'display: auto';
}

function remove ( page ) {
    page.style = 'display: none';
}