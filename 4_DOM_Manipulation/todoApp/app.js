const form = document.querySelector('#add-todo');
const input = document.querySelector('#todo-item');
const todoList = document.querySelector('#todo-list');

if(localStorage.getItem('list'){
    if(localStorage.getItem('list').length > 0){
        todoList.innerHTML = localStorage.getItem('list');
    }
}

todoList.addEventListener('click', function(e){
    //console.log(e);
    //console.log(e.target);
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    }
    else if(e.target.type === 'checkbox'){
        //console.log('class name: ' + e.target.parentElement.className);
        if(e.target.parentElement.className === 'checked'){
            e.target.parentElement.className = '';
        }
        else{
            e.target.parentElement.className = 'checked'
        }

    }
    localStorage.setItem('list', todoList.innerHTML)
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value);
    const newItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'switch';
    removeBtn.innerText = 'Remove';
    newItem.innerText = input.value + ' ';
    newItem.prepend(checkBox);
    newItem.appendChild(removeBtn);
    input.value = '';
    todoList.appendChild(newItem);
    console.log(todoList);
    //localStorage.setItem('list', JSON.stringify(todoList))
    localStorage.setItem('list', todoList.innerHTML)
});