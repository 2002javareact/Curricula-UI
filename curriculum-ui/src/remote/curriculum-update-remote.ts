import { curriculaClient } from "./CurriculaClient";
import { Curriculum } from "../models/Curriculum";
// import { Category } from "../models/Category";

export const curriculaUpdateCurriculum = async (curriculum:Curriculum) => {
    try {
        let response = await curriculaClient.patch('/curriculum', {
            curriculum_id:curriculum.curriculumId,
            curriculum_name:curriculum.curriculumName,
            skills:curriculum.skills
          });
          return response.data;
    } catch (e) {
        if(e.status === 500){
            throw e;
        }else{
            
        }
    }
}

export const curriculaGetCurriculum = async (curriculum_id:number) => {
    try{
        let response = await curriculaClient.get('/curriculum/' + curriculum_id)
        return response.data;
    }catch(e){
        if(e.status === 500){
            throw e;
        }else{
            
        }
    }
}