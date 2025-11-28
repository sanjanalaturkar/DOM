const colorInput = document.getElementById('color-input');
const textInput = document.getElementById('text-input');
const bgButton = document.getElementById('bg-button');
const textButton = document.getElementById('text-button');
const targetDiv = document.getElementById('target-div');

// Background Color Logic
bgButton.addEventListener('click', () => {
    const colorValue = colorInput.value.trim();

    if (colorValue === '') {
        alert("Please enter a color name or code!");
        return;
    }
    
    const tempElement = document.createElement('div');
    tempElement.style.backgroundColor = colorValue;
    
    if (tempElement.style.backgroundColor !== '') {
        targetDiv.style.backgroundColor = colorValue;
        colorInput.value = '';
    } else {
        alert("Invalid color name!");
    }
});

// Text Update Logic
textButton.addEventListener('click', () => {
    const newText = textInput.value;

    if (newText.trim() === '') {
        alert("Please enter some text!");
        return;
    }

    targetDiv.textContent = newText;
    textInput.value = '';
});
