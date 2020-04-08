import { curriculaClient } from "./curricula-client";
import { Curriculum } from "../../models/Curriculum";


export const curriculaCreateCurriculum = async (curriculum:Curriculum) => {
  try{
    const response = await curriculaClient.post('/curriculum', {
        curriculum_id:curriculum.id,
        curriculum_name:curriculum.name,
        skills:curriculum.skillList
      });
    return response.data;
  }
  catch(e){
    if(e.status<500){
      throw e;
    }
    else{
      // TODO
      console.log("TODO!   Throw an internal server error")
    }
  }
}

export const curriculaGetCurriculumList = async () => {
  try{
    const response = await curriculaClient.get('/curriculum');
    return response.data;
  }
  catch(e){
    if(e.status<500){
      throw e;
    }
    else{
      // TODO
      console.log("TODO!   THrow an internal server Error")
    }
  }
}