import { httpError } from "./httpErrors";


export class userNotFoundError extends httpError{
    constructor(){
        super('User Not Found', 404)
    }
}

