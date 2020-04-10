import { curriculaClient } from "./CurriculaClient"
import { TokenExpiredError } from "../errors/TokenExpiredError"
import { UserNotFoundError } from "../errors/UserNotFoundError"
import { InternalServiceError } from "../errors/InternalServiceError"

export const getSkillsByCategoryId = async (id:number)=>{
  try{
    let skills = await curriculaClient.get(`/skill/categoryId/${id}`).catch(e=>{throw e});
    return skills.data;
  } 
  catch (e) {
    if(e.status === 400){
      throw e;
    } 
    else if(e.status === 404){
      throw new UserNotFoundError();
    }
    else{
      throw new InternalServiceError()
    }
  }
}