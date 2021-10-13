const axios = require("axios").default
import { BASE_URL } from "../helpers/constants"

const getAllTypes = () => {
    
    return axios.get (BASE_URL + "/tipo", {
        headers : {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        throw toString(error)
    })
}

export { getAllTypes }