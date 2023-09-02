const input = document.getElementById('inputTodo');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', e => {
    e.preventDefault();
    const li = document.createElement('li');
    const inputValue = input.value.trim();
    const empty = document.getElementById('emptyWarning');
    const computedStyle = window.getComputedStyle(empty);
    if(inputValue){
        li.innerText = inputValue;
        ul.appendChild(li);
        empty.style.display = 'none';
    }else {
        if(computedStyle.getPropertyValue('display') === 'none') empty.style.display = 'block';
    }
    input.value = '';
    saveData();
}, false);

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('todos', ul.innerHTML);
}

(function getData(){
    var test = ul.innerHTML = localStorage.getItem('todos');
})();