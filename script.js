const input = document.getElementById('inputTodo');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', e => {
    e.preventDefault();
    const li = document.createElement('li');
    const inputValue = input.value;
    li.innerText = inputValue;
    ul.appendChild(li);
    input.value = '';
    li.addEventListener('click', () => {
        li.classList.toggle('checked');
    }, false);
}, false);
