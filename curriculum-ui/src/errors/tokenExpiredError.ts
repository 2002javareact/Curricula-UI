import { httpError } from "./httpErrors";


export class tokenExpiredError extends httpError{
    constructor(){
        super('The incoming token has expired.', 401)
    }
}