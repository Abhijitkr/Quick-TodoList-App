const input = document.getElementById('inputTodo');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', e => {
    e.preventDefault();
    const li = document.createElement('li');
    const inputValue = input.value;
    const empty = document.getElementById('emptyWarning');
    if(inputValue){
        li.innerText = inputValue;
        ul.appendChild(li);
        empty.style.display = 'none';
    }else {
       if(empty.style.display === 'none') empty.style.display = 'block';
    }
    input.value = '';
    li.addEventListener('click', () => {
        li.classList.toggle('checked');
    }, false);

}, false);
