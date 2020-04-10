import { ICategoriesState } from ".";
import { AnyAction } from "redux";
import { categoriesTypes } from "../action-mappers/getall-categories-action-mappers";

const initialState: ICategoriesState = {
    allCategory:[],
    errorMessage:''
}

export const categoriesReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case categoriesTypes.GET_ALL_CATEGORIES:{
            return {
                ...state,
                allCategory: action.payload.categoryArray
                
            }
        }  
        case categoriesTypes.FAILED_TO_RETRIEVE_CATEGORIES:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Categories'
            }
        } 
        default:
            return state;
    }
}