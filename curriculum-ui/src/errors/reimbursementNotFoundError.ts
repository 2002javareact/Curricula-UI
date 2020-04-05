import { httpError } from "./httpErrors";


export class reimbursementNotFoundError extends httpError{
    constructor(){
        super('Reimbursement Not Found', 404)
    }
}