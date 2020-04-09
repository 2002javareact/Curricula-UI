import { curriculaClient } from "./CurriculaClient"
import { InternalServiceError } from "../errors/InternalServiceError"
import { CategoryNotFoundError } from "../errors/CategoryNotFoundError"

export const getAllSkills = async ()=>{
    try{
    let allSkills = await curriculaClient.get('/skill')

    console.log(allSkills.data)
    return allSkills.data

} catch (e) {
    if(e.status === 400){
        throw e
    } else if(e.status === 404){
        throw new CategoryNotFoundError()
    }
    else{
        throw new InternalServiceError()
    }
}

}