const input = document.querySelector('.input');
const output = document.querySelector('.output');
const charCount = document.querySelector('.counter');

let timer;

function runApp() {
    let array = [];
    let str = '';
    let char = 0;

    pushInput();
    scrapeDictionary();

    // Loop through user input, adds each value to array (including punctuation)
    function pushInput() {
        for (let i = 0, string = input.value.split( /(\W+|\s)/ ); i < string.length; i++) {
            array.push(string[i]);
        }
    }
    
    function scrapeDictionary() {
        // Loop through user input.
        for (let i = 0; i < array.length; i++) {
            const word = array[i];
            let counter = 0;
    
            // Search through dictionary to match input with Planco word
            for (let j = 0; j < App.data.length; j++) {
                const match = App.data[j].plc;
    
                // Find word in dictionary
                if (word.toLowerCase() === App.data[j].eng.toLowerCase()) {
                    str += match;
                } else {
                    if (word === /\W/) str += match;
                    counter += 1;
                }
                // When all items have been searched and no match
                if (counter === App.data.length) str += word;
            } // End of search loop
            char += word.length;
        } // End of array loop
    }
    output.innerHTML = str;
    charCount.textContent = char;
} // End of runApp().