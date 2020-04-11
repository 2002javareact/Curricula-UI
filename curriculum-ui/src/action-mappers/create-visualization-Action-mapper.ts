
import { Dispatch } from "redux";


export const visualizationTypes = {
  CREATE_VISULIZATION: "VISULIZATION_CREATE_VISULIZATION",
  FAILED_TO_CREATE_VISULIZATION: "VISULIZATION_FAILED_TO_CREATE_VISULIZATION"
}

export const createVisualizationActionMapper = (n:string,c:Array<any>) => async (dispatch:Dispatch) => {
  try{
    let response = await curriculaCreatevisualization(n,c);
    dispatch({
      type:visualizationTypes.CREATE_VISULIZATION,
      payload:{
        response
      }
    })
    dispatch({
      type:visualizationTypes.FAILED_TO_CREATE_VISULIZATION,
      payload:{
        response
      }
    })
  }
  catch(e){
 
  }
}