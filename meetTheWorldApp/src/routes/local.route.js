const axios = require("axios").default
import { BASE_URL } from "../helpers/constants"

const getAllLocals = () => {
    
    return axios.get (BASE_URL + "/local", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        throw toString(error)
    })
}

export { getAllLocals }