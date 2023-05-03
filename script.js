const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('button');

const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

const giveTodos = () => { 
    listElement.innerHTML = "";
    for (todo of todos) {
        const todoElement = document.createElement('li');
        const todoText = document.createTextNode(todo);
        const linkElement = document.createElement('a');

        const pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        const linkText = document.createTextNode('done');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

giveTodos();

const saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

const addTodo = () => {
    const todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';

    giveTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

const deleteTodo = (pos) => {
    todos.splice(pos, 1);
    
    giveTodos();
    saveToStorage();
}