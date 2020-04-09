import { curriculaClient } from "./CurriculaClient";
import { Curriculum } from "../models/Curriculum";


export const curriculaCreateCurriculum = async (curriculum:Curriculum) => {
  try{
    let response = await curriculaClient.post('/curriculum', {
        curriculum_id:curriculum.curriculumId,
        curriculum_name:curriculum.curriculumName,
        skills:curriculum.skills
      });
    return response.data;
  }
  catch(e){
    if(e.status<500){
      throw e;
    }
    else{
      // TODO
      console.log("Throw an internal server error")
    }
  }
}    