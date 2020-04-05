import { httpError } from "./httpErrors";


export class internalServiceError extends httpError{
    constructor(){
        super('Internal Service Error', 500)
    }
}