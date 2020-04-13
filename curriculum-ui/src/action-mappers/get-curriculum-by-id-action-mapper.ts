import { Dispatch } from "redux";
import { curriculaGetCurriculum } from "../remote/curriculum-update-remote";
import { Curriculum } from "../models/Curriculum";

export const getCurriculumTypes = {
    GET_CURRICULUM: "CURRICULA_GET_CURRICULUM",
    FAILED_TO_GET_CURRICULUM: "CURRICULA_FAILED_TO_GET_CURRICULUM"
}

export const getCurriculumByIdActionMapper = (curriculum_id:number) => async (dispatch:Dispatch) => {
    try {
        let getCurriculumById:Curriculum = await curriculaGetCurriculum(curriculum_id);
        dispatch({
            type: getCurriculumTypes.GET_CURRICULUM,
            payload:{
                getCurriculumById
            }
        })
        dispatch({
            type: getCurriculumTypes.FAILED_TO_GET_CURRICULUM,
            payload:{
              getCurriculumById
            }
        })
    } catch (e) {
        //todo
    }
}