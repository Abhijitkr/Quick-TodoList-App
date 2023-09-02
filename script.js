const input = document.getElementById('inputTodo');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', e => {
    e.preventDefault();
    const li = document.createElement('li');
    const span = document.createElement('span');
    const inputValue = input.value.trim();
    span.innerHTML = '&#10060;';
    const empty = document.getElementById('emptyWarning');
    const computedStyle = window.getComputedStyle(empty);
    const dupe = document.getElementById('duplicateWarning');
    const computedDupeStyle = window.getComputedStyle(empty);
    if (inputValue && !duplicate(inputValue)) {
        li.innerText = inputValue;
        li.appendChild(span);
        ul.appendChild(li);
        empty.style.display = 'none';
        dupe.style.display = 'none';
    }else if(duplicate(inputValue)){
        if (computedDupeStyle.getPropertyValue('display') === 'none') dupe.style.display = 'block';
        console.log("Already there!")
    }else {
        if (computedStyle.getPropertyValue('display') === 'none') empty.style.display = 'block';
        dupe.style.display = 'none';

    }
    input.value = '';
    saveData();
}, false);

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function duplicate(inputValue){
    const li = document.querySelectorAll('li');
    if(li.length !== 0){
        const span = li[0].querySelector('span').textContent;
        inputValue += span;
        for(let i=0; i<li.length; i++){
            if (inputValue === li[i].textContent){
                return true;
            }
        }
    }
    return false;
}

function saveData(){
    localStorage.setItem('todos', ul.innerHTML);
}

(function getData(){
    var test = ul.innerHTML = localStorage.getItem('todos');
})();