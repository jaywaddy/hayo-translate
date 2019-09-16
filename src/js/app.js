const input = document.querySelector('.input');
const output = document.querySelector('.output');

let timer;

window.onload = () => {

    input.focus();

};

input.addEventListener('focus', () => {

    timer = setInterval( () => {

        translate();
    
    }, 1000);
    
});

input.addEventListener('blur', () => {

    clearInterval( timer )

});

// input.addEventListener('keypress', translate);

function translate() {

    let array = [];
    let str = '';
    let counter;

    // Loop through input values, adds each to array (including punctuation).
    for ( let i = 0, string = input.value.split( /(\W+|\s)/ ); i < string.length; i++ ) {

        array.push( string[i] );
        
    }

    
    // Loop through array.
    for ( let i = 0; i < array.length; i++ ) {

        counter = 0;

        // Search through dictionary to match input with planco.
        for ( let j = 0; j < App.data.length; j++ ) {
            
            if ( array[i].toLowerCase() === App.data[j].eng.toLowerCase() ) {

            str += `${App.data[j].plc}`;

                

            } else {

                if ( array[i] === /\W/ ) {

                    str += `${App.data[j].plc}`;

                }

                counter += 1;

            }

            // Word not found (all items have been searched with no match).
            if ( counter === App.data.length ) {

                str += `${array[i]}`;

                if (array[i] === /\W/ ) {

                    console.log(`${array[i]} is not in the dictionary.`);

                }

            } 

        } // End of search.

    }; // End of array loop.

    return output.textContent = str;

} // End of concat().