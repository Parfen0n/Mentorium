import axios from 'axios'

import SignUpModel from '../pages/SignUp/SignUpModel'
import SignUp from '../pages/SignUp/SignUp';


export default class API {

    baseURL =  "http://localhost:3001/api";

    sendData(url, data) {
        return axios.post(`${this.baseURL}${url}`, {
            ...data
        })
    }

    getData(url, data) {
        return axios.get(`${this.baseURL}${url}`, {
            ...data
        })
    }

}
 


