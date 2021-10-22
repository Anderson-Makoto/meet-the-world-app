    const axios = require("axios").default
    import { BASE_URL } from "../helpers/constants"

const userCreate = (name, email, password, tipo_id, local_id, budget) => {
    
    return axios.post (BASE_URL + "/user/register", {
        name,
        email,
        password,
        tipo_id,
        local_id,
        budget
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        throw toString(error)
    })
}

const login = (email, password) => {
    return axios.post (BASE_URL + "/user/login", {
        email,
        password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        throw toString(error)
    })
}

const logout = (id, token) => {
    return axios.get(BASE_URL + "/user/logout/" + id, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {
        return res.data
    }).catch(err => {
        throw toString(err)
    })
}

const updateUser = (userData, token) => {
    const data = {
        name: userData.name,
        tipo_id: userData.tipoId,
        local_id: userData.localId,
        budget: userData.budget
    }

    const header = {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
    }

    return axios.put(BASE_URL + "/user/" + userData.id, data, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {
        res.data
    }).catch(err => {
        throw toString(err)
    })
}

export { userCreate, login, logout, updateUser }
