const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const output = document.querySelector('.output');

submit.addEventListener('click', function() {

    concat();

});

function concat() {

    let array = [];
    let str = '';

    // Loop through input values, adds each to array.
    for ( let i = 0; i < input.value.split(' ').length; i++ ) {

        array.push(input.value.split(' ')[i].toLowerCase());
        
    }

    // Loop through array.
    for ( let i = 0; i < array.length; i++ ) {

        // Search through dictionary to match input with planco.
        for ( let j = 0; j < App.word.length; j++ ) {

            if ( array[i] === App.word[j].eng ) {

                str += `${App.word[j].plc} `;

            }

        } // End of search.

    }; // End of array loop.

    return output.textContent = str;

} // End of concat().