import { Dispatch } from "redux";
import {CreateCategory} from "../remote/Category";


export const CreateCatTypes = {
    CREATE_CATEGORY: 'CAT_CREATE_CATEGORY',
    FAILED_TO_CREATE_CATEGORY:'CAT_FAIL_TO_CREATE_CATEGORY'
}



 // export class Category{
  //   categoryId: number 
  //   categoryColor:string
  //   categoryName:string 
  //   constructor(categoryId:number,categoryColor:string,categoryName:string)
  //   {
  //       this.categoryId = categoryId
  //       this.categoryColor = categoryColor
  //       this.categoryName = categoryName

export const createCatActionMapper = ( categoryId:number, categoryColor:string, categoryName:string) => async  (dispatch:Dispatch) => {
    try {
        let createCat = await CreateCategory(categoryId, categoryColor, categoryName)
        dispatch({
          type:  CreateCatTypes.CREATE_CATEGORY,
          payload:{
            createCat
          }
        })
    }catch(e){
        console.log('error in action mapper'+e);
       
            dispatch({
                type:CreateCatTypes.FAILED_TO_CREATE_CATEGORY,
            })
        }
    }