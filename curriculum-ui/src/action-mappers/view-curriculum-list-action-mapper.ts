import { Curriculum } from "../models/Curriculum"
import { curriculaGetCurriculumList } from "../remote/curricula/curriculum-curricula-remote"
import { Dispatch } from "redux";


export const curriculumListTypes = {
  CURRICULUM_LIST_SUCCESSFUL: "CURRICULUM_LIST_SUCCESSFUL",
  CURRICULUM_LIST_FAILED: "CURRICULUM_LIST_FAILED"
}

export const viewCurriculumListActionMapper = () => async (dispatch:Dispatch) => {
  try{
    const curriculumList:Array<Curriculum> = await curriculaGetCurriculumList();
    dispatch({
      type:curriculumListTypes.CURRICULUM_LIST_SUCCESSFUL,
      payload:{
        curriculumList
      }
    })
  }
  catch(e){
    //TODO Throw internal server error
    dispatch({
      type:curriculumListTypes.CURRICULUM_LIST_FAILED,
      payload:{
        errorMessage: "Internal Server Error"
      }
    })
  }
}