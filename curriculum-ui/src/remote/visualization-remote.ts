import { curriculaClient } from "./CurriculaClient";
import { InternalServiceError } from "../errors/InternalServiceError";
import { Visualization } from "../models/Visualization";


export const getAllVisualizations = async () => {
    try {
        let response = await curriculaClient.get('/visualization')
if(response.status === 200){
    return response.data
}else{
    throw new InternalServiceError()
}
    } catch (e) {
        throw new InternalServiceError()
    }
}

export const getOneVisualization = async (id:number) => {
    try {
        let response = await curriculaClient.get(`/visualization/${id}`)
if(response.status === 200){
    return response.data
}else{
    throw new InternalServiceError()
}
    } catch (e) {
        throw new InternalServiceError()
    }
}

export const updateVisualization = async (visualizationToUpdate:Visualization) => {
    try {
        let response = await curriculaClient.patch(`/visualization/`, visualizationToUpdate)
if(response.status === 200){
    return response.data
}else{
    throw new InternalServiceError()
}
    } catch (e) {
        throw new InternalServiceError()
    }
}

export async function createVisualization(visualizationName: string, curriculum: Array<any>): Promise<Visualization> {
    let visualizationData = {
       
        curriculum: [
            {
               curriculum
              
            }
          ],
          visualizationName
    }

    try {
        let response = await curriculaClient.post('/visualization',visualizationData)
if(response.status === 200){
    return response.data
}else{
    throw new InternalServiceError()
}
    } catch (e) {
        throw new InternalServiceError()
    }
}