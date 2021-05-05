import { HashFormat } from './interface/HashFormat.js';  
export class ToDo  implements HashFormat{
    constructor(
        readonly task:string,
        private details:string,
        public timeamount:number,
        ){}
    format(){
        return `${this.task} includes ${this.details} should take around ${this.timeamount} of time`;
    }
}