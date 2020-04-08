import { Category } from "../models/Category";

import { CategoryNotFoundError } from "../errors/CategoryNotFoundError";
import { InternalServiceError } from "../errors/InternalServiceError";
import { curriculaClient } from "./CurriculaClient";

export async function getCategoryById(categoryId:number|undefined):Promise<Category>{    
    try{
        let res = await curriculaClient.get(`/category/${categoryId}`)

        if(res.status === 400)
        {
            throw new CategoryNotFoundError()
        }
        return res.data
    } catch (e)
    {
        if(e.status === 400){
            throw e
        } else if(e.status === 404){
            throw new  CategoryNotFoundError()
        }
        else{
            throw new InternalServiceError()
        }
    }
}//end of class


export const FetchAllCategories = async ()=>{   
    try{
        let allCategory = await curriculaClient.get(`/category/`)

        if(allCategory.status === 400){
            throw new CategoryNotFoundError()
        }
        return allCategory.data
    } catch (e) {
        if(e.status === 400){
            throw e
        } else if(e.status === 404){
            throw new CategoryNotFoundError()
        }
        else{
            throw new InternalServiceError()
        }
    }
}//end of class


export async function CreateCategory(categoryId: number, categoryColor: string, categoryName: string): Promise<Category> {
    let catData = {
        categoryId,categoryColor, categoryName
    }
    try {
       // console.log('we are in remote');
        

        let allCategory = await curriculaClient.post('/category', catData)
        //console.log('we are in remote '+response);
        if(allCategory.status === 404){
            throw new CategoryNotFoundError()
        }
        return allCategory.data
    } catch (e) {
        if(e.status === 404){
            throw e
        } else{
            throw new InternalServiceError()
        }
    }
}