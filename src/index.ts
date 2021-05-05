import { todo } from './class/htmlrender/todo.js';
import { HashFormat } from './class/interface/HashFormat.js';
import { ToDo } from './class/Todo.js';   

const form = document.querySelector('.new-to-do') as HTMLFormElement;
const priority = document.querySelector('#priority') as HTMLSelectElement;
const task = document.querySelector('#task') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const timeamount = document.querySelector('#timeamount') as HTMLInputElement;
const ul = document.querySelector('ul')!;
const list = new todo(ul);
 form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();
    let item : HashFormat;
    if(priority.value === '5'){
        item = new ToDo(task.value, details.value, timeamount.valueAsNumber)
    } else {
        item = new ToDo(task.value, details.value, timeamount.valueAsNumber)

    }

    console.log(
        item
    );
    list.render(item, priority.value, 'end');
})