const App = {

    word: [
        // H
        [ 'hello', 'hayo' ],
        // W
        [ 'world', 'wuntow' ]
    ]
};

const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const output = document.querySelector('.output');

submit.addEventListener('click', function() {
    console.log(concat());
});

function concat() {
    let array = [];
    let str = '';

    for (let i = 0; i < input.value.split(' ').length; i++) {
        // Stores each word from userInput in an array 
        array.push(input.value.split(' ')[i].toLowerCase());
        
        // Find equivilant in dicionary
        
        str += `${array[i] = App.word[i][1]} `;

        // Unidentified words
        if ( array[i] !== App.word[i][0] ) {
            console.log('NaW');
        }
    }
    return output.textContent = str;
}
// let grab = App.word.findIndex(function() {
//     App.word.english === 'hello'
// });