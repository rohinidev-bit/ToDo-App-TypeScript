export class todo {
    constructor(container) {
        this.container = container;
    }
    render(task, heading, pos) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        h3.innerText = heading;
        li.append(h3);
        const p = document.createElement('p');
        p.innerText = task.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
