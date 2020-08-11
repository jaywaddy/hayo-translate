// Element
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon circle');

searchIcon.addEventListener('click', () => runSearch());
searchInput.addEventListener('keyup', event => {
    // runSearch() on 'enter' pressed
    if (event.keyCode == 13) {
        runSearch();
    }
});

// Search functionality
function runSearch() {
    // Evaluate user input
    const userInput = searchInput.value;
    const cardWrapper = document.querySelector('.card-wrapper');
    const cards = cardWrapper.children;

    // Disable default dictionary cards
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }

    // Compare user input to data.js enrties
    while (userInput) {
        for (i = 0; i < App.data.length; i++) {
            const match = App.data[i];
            const matchEng = App.data[i].eng;
            const mathcPlc = App.data[i].plc;
            const card = document.createElement('div');

            // If user input matches an App.data entry, display it
            if (matchEng.toLowerCase() == userInput.toLowerCase() ||
                mathcPlc.toLowerCase() == userInput.toLowerCase()) {
                card.innerHTML = `
                <div class="card">
                    <div class="eng">
                        <small class="t12">English</small>
                        <span class="t30">${match.eng.toLowerCase()}</span>
                        <em>${match.pos}</em>
                    </div>
                    <div class="plc">
                        <small class="t12">Planco</small>
                        <span class="t30">${match.plc.toLowerCase()}</span>
                        <em>${match.pro}</em>
                    </div>
                </div>
                `
                loadDictionary();
                cardWrapper.appendChild(card);
            }
        }
        break;
    }
}