export class ToDo {
    constructor(task, details, timeamount) {
        this.task = task;
        this.details = details;
        this.timeamount = timeamount;
    }
    format() {
        return `${this.task} includes ${this.details} should take around ${this.timeamount} of time`;
    }
}
