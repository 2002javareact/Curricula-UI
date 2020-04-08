<<<<<<< HEAD
import { Curriculum } from "../components/models/Curriculum"
=======
import { Curriculum } from "../models/Curriculum"
>>>>>>> dev
import { curriculaCreateCurriculum } from "../remote/CurriculumCurriculaRemote"
import { Dispatch } from "redux";


export const curriculumTypes = {
  CREATE_CURRICULUM: "CURRICULA_CREATE_CURRICULUM",
  FAILED_TO_CREATE_CURRICULUM: "CURRICULA_FAILED_TO_CREATE_CURRICULUM"
}

export const createCurriculumActionMapper = (curriculum:Curriculum) => async (dispatch:Dispatch) => {
  try{
    let response = await curriculaCreateCurriculum(curriculum);
    dispatch({
      type:curriculumTypes.CREATE_CURRICULUM,
      payload:{
        response
      }
    })
    dispatch({
      type:curriculumTypes.FAILED_TO_CREATE_CURRICULUM,
      payload:{
        response
      }
    })
  }
  catch(e){
    //TODO Throw internal server error
  }
}