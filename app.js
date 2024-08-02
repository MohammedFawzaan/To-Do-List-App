const inputbox = document.getElementById("inputbox");
const list = document.getElementById("listcontainer");
const button = document.querySelector('.btn');
const light = document.querySelector('#light');
const button1 = document.getElementById('light');

button1.addEventListener('click', function() {
    document.body.classList.toggle('dark-bg');
    document.body.classList.toggle('light-bg');
});

function addTask() {
    if(inputbox.value === '') {
        alert('Write a task');
    } else {
        let li = document.createElement('li');
        li.innerText = inputbox.value;
        list.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputbox.value = '';
        save();
    }
}

button.addEventListener('click', addTask);

document.addEventListener('keypress', function(event){
    if(event.key === "Enter" || event.keyCode === 13) {
        addTask();
    }
});

list.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle("checked");
        save();
    } else if(event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        save();
    }
});

// Saving Data in Local Storage
function save() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem('data');
}

showTask();