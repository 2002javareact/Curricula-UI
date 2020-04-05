import { httpError } from "./httpErrors";


export class badCredentialsError extends httpError{
    constructor(){
        super('Invalid Credentials', 400)
    }
}