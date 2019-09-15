const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const output = document.querySelector('.output');

submit.addEventListener('click', function() {

    translate();

});

function translate() {

    let array = [];
    let str = '';
    let counter;

    // Loop through input values, adds each to array.
    for ( let i = 0; i < input.value.split(' ').length; i++ ) {

        array.push(input.value.split(' ')[i].toLowerCase());
        
    }

    // Loop through array.
    for ( let i = 0; i < array.length; i++ ) {

        counter = 0;

        // Search through dictionary to match input with planco.
        for ( let j = 0; j < App.data.length; j++ ) {
            
            if ( array[i] === App.data[j].eng.toLowerCase() ) {

                str += `${App.data[j].plc} `;

            } else {

                counter += 1;

            }

            // Word not found (all items have been searched with no match).
            if ( counter === App.data.length ) {

                str += `${array[i]} `;
                console.log(`${array[i]} is not in the dictionary.`);

            } 

        } // End of search.

    }; // End of array loop.

    return output.textContent = str;

} // End of concat().