import { curriculaClient } from "./CurriculaClient"
import { InternalServiceError } from "../errors/InternalServiceError"
import { CategoryNotFoundError } from "../errors/CategoryNotFoundError"
import { Category } from "../models/Category"
import { BadRequestError } from "../errors/BadRequestError"

export const getAllSkills = async ()=>{
    try{
    let res = await curriculaClient.get('/skill')
    return res.data

} catch (e) {
    if(e.status === 404){
        throw new CategoryNotFoundError()
    }
    else{
        throw new InternalServiceError()
    }
}
}

export const createSkill = async (skillName:string,category:Category)=> {
    let destructedData={
        skillId:0,
        skillName,
        category
    }
    try{
        let res = await curriculaClient.post('/skill',destructedData)
        if(res.status === 400){
            throw new BadRequestError()
        }
        return res.data
    }catch(e){
        throw new InternalServiceError()
    }
    
}