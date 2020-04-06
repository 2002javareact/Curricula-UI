import { curriculaClient } from "./curricula-client";
import { Curriculum } from "../../components/models/Curriculum";


export const curriculaCreateCurriculum = async (curriculum:Curriculum) => {
  try{
    let response = await curriculaClient.post('/curriculum', {
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
      console.log("Throw an internal server error")
    }
  }
}