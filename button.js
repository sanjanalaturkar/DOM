const list = document.querySelector('#my-list');
const addButton = document.querySelector('#add-btn');

function applyStyling(liElement, sequenceNumber) {
    if (sequenceNumber % 2 !== 0) {
        liElement.style.fontWeight = 'bold';
        liElement.style.color = 'blue';
    } else {
        liElement.style.fontStyle = 'italic';
        liElement.style.color = 'red';
    }
}

// Initial styling
const initialItems = list.querySelectorAll('li');
initialItems.forEach((item, index) => {
    applyStyling(item, index + 1);
});

// Event Listener
addButton.addEventListener('click', () => {
    const newSequenceNumber = list.children.length + 1;
    
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${newSequenceNumber}`;

    applyStyling(newItem, newSequenceNumber);

    list.appendChild(newItem);
});
