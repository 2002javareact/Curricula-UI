import { curriculaClient } from "./CurriculaClient"
import { InternalServiceError } from "../errors/InternalServiceError"
import { CategoryNotFoundError } from "../errors/CategoryNotFoundError"
import { Category } from "../models/Category"
import { BadRequestError } from "../errors/BadRequestError"
import { Skill } from "../models/Skill"

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

export const updateSkill = async (skillToUpdate:Skill)=>{
    try{
    let req = {
        skillToUpdate
    }
    let res = await curriculaClient.patch('/skill', req)
    if(res.status === 400){
        throw new BadRequestError()
    }
    return res.data

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