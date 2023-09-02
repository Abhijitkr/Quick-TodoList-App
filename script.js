const input = document.getElementById('inputTodo');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', e => {
    e.preventDefault();
    const li = document.createElement('li');
    const span = document.createElement('span');
    const inputValue = input.value.trim(); // removes space if any
    span.innerHTML = '&#10060;'; // unicode for cross/delete icon

    const empty = document.getElementById('emptyWarning');
    const computedStyle = window.getComputedStyle(empty); // getting computed style(includes external css styling)

    const dupe = document.getElementById('duplicateWarning');
    const computedDupeStyle = window.getComputedStyle(dupe); // getting computed style(includes external css styling)

    if (inputValue && !duplicate(inputValue)) { // checks for empty and duplication
        li.innerText = inputValue; // adds value to list
        li.appendChild(span); // adds cross/delete icon
        ul.appendChild(li); // adds list to ul

        //clearing if any warning visible
        empty.style.display = 'none';
        dupe.style.display = 'none';

    }else if(duplicate(inputValue)){ //checking for duplication
        if (computedDupeStyle.getPropertyValue('display') === 'none') dupe.style.display = 'block'; //checking computed display value and changing for duplication validation
        empty.style.display = 'none'; // clearing empty warning
    }else {
        if (computedStyle.getPropertyValue('display') === 'none') empty.style.display = 'block'; //checking computed display value and changing for empty validation
        dupe.style.display = 'none'; // clearing duplication warning

    }
    input.value = ''; // clearing the input field after adding to the list
    saveData(); //saving the ul state
}, false);

ul.addEventListener('click', (e) => { 

    //marking checked or unchecked
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData(); //saving the ul state

    //deleting list from ul    
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData(); //saving the ul state
    }
}, false);

function duplicate(inputValue){ // dupllication check function
    const li = document.querySelectorAll('li'); // selecting all the list
    if(li.length !== 0){ // checks if list not empty
        const span = li[0].querySelector('span').textContent; // stores the cross/delete icon
        inputValue += span; // adds cross/delete to the input value 
        for(let i=0; i<li.length; i++){ // looping through all list
            if (inputValue === li[i].textContent){ // checks for duplication value with cross/delete icon
                return true;
            }
        }
    }
    return false;
}

function saveData(){
    localStorage.setItem('todos', ul.innerHTML); // saves to local storage
}

(function getData(){
    var test = ul.innerHTML = localStorage.getItem('todos'); // invoke itself to get the saved values {Immediately Invoked Function Expression (IIFE)}
})();