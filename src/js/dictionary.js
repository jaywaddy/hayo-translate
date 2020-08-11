function runDictionary() {
    const letter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < letter.length; i++) {
        const newDiv = document.createElement('div');
        const newSpan = document.createElement('span');
        const div = letterTabs.appendChild(newDiv);
        const span = div.appendChild(newSpan);

        // Display letter tabs
        span.innerText = letter[i].toUpperCase();
        span.classList.add('t12');

        div.addEventListener('click', function() {
            const active = document.querySelector('.active-tab');
            const cardWrapper = document.querySelector('.card-wrapper');

            // Relocate active tab & clear cards
            active.classList.remove('active-tab');
            this.classList.add('active-tab');
            cardWrapper.innerHTML = '';

            loadDictionaryContent();

            // Load dictionary content
            function loadDictionaryContent() {
                for (let j = 0; j < App.data.length; j++) {
                    const card = document.createElement('div');
    
                    let arr = [];
                    
                    if (App.data[j].eng.charAt(0).toLowerCase() === letter[i]) {
                        card.innerHTML = `
                        <div class="card">
                            <div class="eng">
                                <small class="t12">English</small>
                                <span class="t30">${App.data[j].eng.toLowerCase()}</span>
                                <em>${App.data[j].pos}</em>
                            </div>
                            <div class="plc">
                                <small class="t12">Planco</small>
                                <span class="t30">${App.data[j].plc.toLowerCase()}</span>
                                <em>${App.data[j].pro}</em>
                            </div>
                        </div>
                        `
                        arr.push(card);
    
                        for (n = 0; n < arr.length; n ++) {
                            cardWrapper.appendChild(arr[n]);
                        }
                    } 
                }
            } // End of loadDictionaryContent()
        }); // End of click event listener
    }
    letterTabs.firstElementChild.classList.add('active-tab');
} // End of dictionary()