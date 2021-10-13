const axios = require("axios").default
import { BASE_URL } from "../helpers/constants"

const getAllPosts = (token) => {
    return axios.get (BASE_URL + "/post/getPostsResume", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        throw toString(error)
    })
}

const createPost = (local_id, tipo_id, user_id, date, price, title, description, token) => {
    return axios.post(BASE_URL + "/post", {
        local_id,
        tipo_id,
        user_id,
        date,
        price,
        title,
        description
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        throw toString(error)
    })
}

export { getAllPosts, createPost }