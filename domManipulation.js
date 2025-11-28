// Action 1
const heading = document.getElementById('main-title');
heading.textContent = "Welcome to the DOM World!";

// Action 2
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}

// Action 3
const container = document.querySelector('.container');
if (container) {
    container.style.backgroundColor = 'yellow';
}
