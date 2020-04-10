import { curriculaClient } from "./CurriculaClient";
import { InternalServiceError } from "../errors/InternalServiceError";
import { Visualization } from "../models/Visualization";
import { visualizationUpdateTypes } from "../action-mappers/update-visualization-action-mapper";


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
        let response = await curriculaClient.patch(`/visualization/${visualizationToUpdate.visualizationId}`, visualizationToUpdate)
if(response.status === 200){
    return response.data
}else{
    throw new InternalServiceError()
}
    } catch (e) {
        throw new InternalServiceError()
    }
}