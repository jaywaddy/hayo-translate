const input = document.querySelector('.input');
const output = document.querySelector('.output');
const charCount = document.querySelector('.counter');

function runApp() {
    let array = [];
    let str = '';
    let char = 0;
    
    // Loop through input values, adds each to array (including punctuation).
    for (let i = 0, string = input.value.split( /(\W+|\s)/ ); i < string.length; i++) {
        array.push( string[i] );
    }
    
    // Loop through array.
    for (let i = 0; i < array.length; i++) {
        const word = array[i];

        let counter = 0;

        // Search through dictionary to match input with Planco word.
        for (let j = 0; j < App.data.length; j++) {
            const match = App.data[j].plc;

            // If the word is in the dictionary.
            if (word.toLowerCase() === App.data[j].eng.toLowerCase()) {
                str += match;
            } else {
                counter += 1;

                if ( word === /\W/ ) {
                    str += match;
                }
            }

            // When all items have been searched with no match.
            if (counter === App.data.length) {
                str += word;
            } 
        } // End of search loop.

        char += word.length;
    } // End of array loop.

    output.innerHTML = str;
    charCount.textContent = char;
} // End of runApp().