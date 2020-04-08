import { curriculaClient } from "./CurriculaClient"
<<<<<<< HEAD
import { TokenExpiredError } from "../errors/tokenExpiredError"
import { UserNotFoundError } from "../errors/userNotFoundError"
import { InternalServiceError } from "../errors/internalServiceError"
=======
import { TokenExpiredError } from "../errors/TokenExpiredError"
import { UserNotFoundError } from "../errors/UserNotFoundError"
import { InternalServiceError } from "../errors/InternalServiceError"
>>>>>>> dev

export const getAllSkills = async ()=>{
    try{
    let allSkills = await curriculaClient.get('/skill')

    if(allSkills.status === 400){
        throw new TokenExpiredError()
    }
<<<<<<< HEAD

=======
    console.log(allSkills.data)
>>>>>>> dev
    return allSkills.data

} catch (e) {
    if(e.status === 400){
        throw e
    } else if(e.status === 404){
        throw new UserNotFoundError()
    }
    else{
        throw new InternalServiceError()
    }
}

}