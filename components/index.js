import { todo } from './class/htmlrender/todo.js';
import { ToDo } from './class/Todo.js';
const form = document.querySelector('.new-to-do');
const priority = document.querySelector('#priority');
const task = document.querySelector('#task');
const details = document.querySelector('#details');
const timeamount = document.querySelector('#timeamount');
const ul = document.querySelector('ul');
const list = new todo(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let item;
    if (priority.value === '5') {
        item = new ToDo(task.value, details.value, timeamount.valueAsNumber);
    }
    else {
        item = new ToDo(task.value, details.value, timeamount.valueAsNumber);
    }
    console.log(item);
    list.render(item, priority.value, 'end');
});
