const input = document.getElementById('inputTodo');
const button = document.querySelector('button');
const ul = document.querySelector('ul');



button.addEventListener('click', e => {
    e.preventDefault();
    var inputValue = input.value;
    var li = document.createElement('li');
    li.innerText = inputValue;
    ul.appendChild(li);
    input.value = '';
}, false);

