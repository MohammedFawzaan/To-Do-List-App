const inputbox = document.getElementById("inputbox");
const list = document.getElementById("listcontainer");
const button = document.querySelector('button');
button.addEventListener('click',function() {
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
});
document.addEventListener('keypress',function addtask(event){
    if(event.key === "Enter" || event.keyCode === 13) 
    {
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

function save() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem('data');
}
showTask();