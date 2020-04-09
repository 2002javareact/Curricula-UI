import { curriculaClient } from "./CurriculaClient";
import { InternalServiceError } from "../errors/InternalServiceError";


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