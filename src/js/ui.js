// App buttons
const clearBtn = document.querySelector('.clear');
const copyBtn = document.querySelector('.copy');

// Nav links
const homeLink = document.querySelector('.translate-link');
const dictLink = document.querySelector('.dictionary-link');
const aboutLink = document.querySelector('.about-link');

// Pages
const homePage = document.querySelector('.translator-box');
const aboutPage = document.querySelector('.about-box');

window.onload = () => {
    input.focus();
    remove(aboutPage);

    // App function.
    setInterval(() => {
        runApp();

        if (input.value === '') {
            remove(clearBtn);
        } else {
            show(clearBtn);
        }
    }, 1000 );
}

// Clear text
clearBtn.addEventListener('click', function() {
    // Clear input
    input.value = '';

    // Clear output
    runApp();

    // Keep input active
    setTimeout(() => {
        input.focus();
    }, 1);
}); // End clear text

// Copy button
copyBtn.addEventListener('click', function() {
    let text = document.createElement('textarea');

    document.body.appendChild(text)
    text.value = output.textContent;
    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);

    remove(this);
});

// New page script
homeLink.firstElementChild.classList.add('active-link');

window.addEventListener('hashchange', function () {
    const url = this.location.hash;

    const home = homeLink.firstElementChild.classList;
    const dict = dictLink.firstElementChild.classList;
    const about = aboutLink.firstElementChild.classList;

    remove(aboutPage);

    // Home
    if (url === '' || url === '#translate') {

        // Active link
        home.add('active-link');
        dict.remove('active-link');
        about.remove('active-link');

        show(homePage);
        remove(aboutPage);
    } 
    
    // Dictionary
    if (url === '#dictionary') {
        // Active link
        home.remove('active-link');
        dict.add('active-link');
        about.remove('active-link');

        remove(homePage);
        remove(aboutPage);
    }

    // About
    if (url === '#about') {
        // Active link
        home.remove('active-link');
        dict.remove('active-link');
        about.add('active-link');

        show(aboutPage);
        remove(homePage);
    }
    
}); // End new page script

// Functions
function show(element) {
    element.style = 'display: auto';
}

function remove(element) {
    element.style = 'display: none';
}