const clearBtn = document.querySelector('.clear');

outClick = function() {



}

clearBtn.addEventListener('click', () => {

    
    //Clear input.
    input.value = '';

    // Clear output.
    translate();

    clearBtn.classList.add('hide');
    
    input.focus();
});