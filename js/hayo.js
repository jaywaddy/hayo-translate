// Dictionary
const App = {

    word: [
        // H
        { eng: 'hello', plc: 'hayo' },

        // W
        { eng: 'world', plc: 'wuntow' }
    ]
    
};

const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const output = document.querySelector('.output');

submit.addEventListener('click', function() {

    concat();

});

function concat() {

    let array = [];
    let str = '';

    // Loop through input array
    for ( let i = 0; i < input.value.split(' ').length; i++ ) {

        // Loop through dictionary to match object values to array values
        for ( let j = 0; j < App.word.length; j++ ) {

            str += `${array[i] = App.word[j].eng} `;

            if ( App.word[j].eng === array[i] ) {
                
                console.log('TRUE');
                str += `${array[i] = App.word[j][1]} `;

            } else {

                // Unidentified words
                // console.log('UNIDENTIFIED SCRIPT');

            }

        } // End of dictionary loop

        // Stores each word from userInput in an array 
        array.push(input.value.split(' ')[i].toLowerCase());
        
        
    } // End of array loop

    return output.textContent = str;

} // End of concat()