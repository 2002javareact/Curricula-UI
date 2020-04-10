import { Dispatch } from "redux"
import { categoriesTypes } from "./categories-getall-action-mappers"
import { getAllVisualizations } from "../remote/visualization-remote"



export const visualizationTypes = {
    GET_ALL_VISUALIZATIONS: 'GET_ALL_VISUALIZATIONS',
    FAILED_TO_RETRIEVE_VISUALIZATIONS: 'FAILED_TO_RETRIEVE_VISUALIZATIONS'
}

export const getAllVisualizationsActionMapper = () => async (dispatch:Dispatch) => {
    try {
        let allVisualizations = await getAllVisualizations()

        dispatch({
            type: visualizationTypes.GET_ALL_VISUALIZATIONS,
            payload:{
                allVisualizations
            }
        })
    } catch (e) {
        dispatch({
            type:categoriesTypes.FAILED_TO_RETRIEVE_CATEGORIES
        })
    }
}