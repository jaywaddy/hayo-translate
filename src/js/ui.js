const clearBtn = document.querySelector('.clear');
const copyBtn = document.querySelector('.copy');

// Clear text.
clearBtn.addEventListener( 'click', function() {

    // Clear input.
    input.value = '';

    // Clear output.
    translate();

    // Keep input active.
    setTimeout( () => {

        input.focus();

    }, 1);

}); // End clear text.

// Copy button.
copyBtn.addEventListener('click', () => {

    let text = document.createElement('textarea');

    document.body.appendChild(text)
    text.value = output.textContent;
    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);

});