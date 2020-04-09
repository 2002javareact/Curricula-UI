import { IViewAllVisualizationsState } from ".";
import { visualizationTypes } from "../action-mappers/get-all-visualizations-action-mapper";
import { AnyAction } from "redux";


const initialState: IViewAllVisualizationsState = {
    allVisualizations:[],
    errorMessage:''
}

export const visualizationReducer = (state = initialState, action:AnyAction) =>{
    switch(action.type){
        case visualizationTypes.GET_ALL_VISUALIZATIONS:{
            return{
                ...state,
                allVisualizations: action.payload.allVisualizations
            }
        }
        case visualizationTypes.FAILED_TO_RETRIEVE_VISUALIZATIONS:{
            return{
                ...state,
                errorMessage:'Fail to Retrieve visualizations'
            }
        }
        default:
            return state
    }
}