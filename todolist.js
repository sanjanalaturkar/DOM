const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

function createListItem(taskText) {
    const listItem = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn'); 

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');

    listItem.appendChild(taskSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    
    return listItem;
}

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task before adding.');
        return; 
    }

    const newItem = createListItem(taskText);
    todoList.appendChild(newItem);

    taskInput.value = '';
});

todoList.addEventListener('click', (event) => {
    const clickedElement = event.target;
    
    if (clickedElement.classList.contains('delete-btn')) {
        const listItem = clickedElement.closest('li');
        if (listItem) {
            listItem.remove();
        }
        
    } else if (clickedElement.classList.contains('complete-btn')) {
        const listItem = clickedElement.closest('li');
        const taskSpan = listItem.querySelector('.task-text');

        if (taskSpan) {
            taskSpan.classList.toggle('completed');
        }
    }
});
