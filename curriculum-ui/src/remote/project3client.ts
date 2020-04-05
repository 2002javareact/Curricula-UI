import axios from 'axios'
import { environment } from '../environment'

//set up our base environment for our webflicks connection
export const project3client = axios.create({
    baseURL:environment.project3BaseUrl, //the base network address with no URI's on 
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})