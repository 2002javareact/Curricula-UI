import { Curriculum } from "../models/Curriculum";
import { Dispatch } from "redux";
import { curriculaUpdateCurriculum } from "../remote/CurriculumUpdateCurriculaRemote";

export const updateCurriculumTypes = {
    UPDATE_CURRICULUM: "CURRICULA_VIEW_AND_UPDATE_CURRICULUM",
    FAILED_TO_VIEW_AND_UPDATE_CURRICULUM: "CURRICULA_FAILED_TO_VIEW_AND_UPDATE_CURRICULUM"
}

export const viewAndUpdateCurriculumActionMapper = (curriculum:Curriculum) => async (dispatch:Dispatch) => {
    try {
        let response = await curriculaUpdateCurriculum(curriculum);
        dispatch({
            type: updateCurriculumTypes.UPDATE_CURRICULUM,
            payload:{
                response
            }
        })
        dispatch({
            type: updateCurriculumTypes.FAILED_TO_VIEW_AND_UPDATE_CURRICULUM,
            payload:{
              response
            }
        })
    } catch (e) {
        //todo
    }
}