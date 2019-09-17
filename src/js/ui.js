// App buttons.
const clearBtn = document.querySelector( '.clear' );
const copyBtn = document.querySelector( '.copy' );

// Nav links.
const transLink = document.querySelector( '.translate-link' );
const dictLink = document.querySelector( '.dictionary-link' );
const aboutLink = document.querySelector( '.about-link' );

// Clear text.
clearBtn.addEventListener( 'click', function() {

    // Clear input.
    input.value = '';

    // Clear output.
    runApp();

    // Keep input active.
    setTimeout( () => {

        input.focus();

    }, 1);

}); // End clear text.

// Copy button.
copyBtn.addEventListener( 'click', () => {

    let text = document.createElement( 'textarea' );

    document.body.appendChild( text )
    text.value = output.textContent;
    text.select();
    document.execCommand( 'copy' );
    document.body.removeChild( text );

});

// New page script.
transLink.firstElementChild.classList.add( 'active-link' );

window.addEventListener('hashchange', function () {

    const url = this.location.hash;

    const trans = transLink.firstElementChild.classList;
    const dict = dictLink.firstElementChild.classList;
    const about = aboutLink.firstElementChild.classList;

    const homePage = document.querySelector( '.translator-box' ).classList;

    if ( url === '' || url === '#translate' ) {

        trans.add( 'active-link' );
        dict.remove( 'active-link' );
        about.remove( 'active-link' );

        homePage.remove( 'disable' );
        homePage.remove( 'hide' );
        homePage.add( 'show' );
    
    } else if ( url === '#dictionary' ) {
    
        trans.remove( 'active-link' );
        dict.add( 'active-link' );
        about.remove( 'active-link' );

        // Home
        homePage.add( 'hide' );
        homePage.remove( 'show' );
        setTimeout( () => {

            homePage.add( 'disable' );

        }, 200)

        // Dictionary


        // About
    
    } else if ( url === '#about' ) {
    
        trans.remove( 'active-link' );
        dict.remove( 'active-link' );
        about.add( 'active-link' );

        // Home
        homePage.add( 'hide' );
        homePage.remove( 'show' );
        setTimeout( () => {

            homePage.add( 'disable' );

        }, 200)

        // Dictionary


        // About
    
    }

}); // End new page script.


