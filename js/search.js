
// Variables
let form = document.querySelector('.search-form')
let searchInput = form.querySelector('input')
let searchBtn = form.querySelector('button')
let cardsSection = document.querySelector('.cards-section');
let cards = document.querySelectorAll('.card');
let isNull = false;

// Function
function searchAction () {
    let value = searchInput.value;
    
    // To avoid repeating the action if the value was empty the first time
    if (isNull && !value.trim()) return;
    if (!value.trim()) isNull = true;

    // Filter Cards Title
    let newCards = [...cards].filter(card => {
        let cardsTitle = card.querySelector('article header h2');
        return cardsTitle.textContent.toLowerCase().includes(value.toLowerCase())
    })
    
    // Appending and Replacing Cards with Filtered Cards
    cardsSection.innerHTML = '';
    newCards.forEach(card => {
        cardsSection.appendChild(card)
    })
    isNull = false;
}

// Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

searchBtn.onclick = searchAction;
searchInput.onkeyup = (e) => {
    if (e.key === 'Enter') {
        searchAction()
    }
}