import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { getAllPosts } from "../../routes/posts.route"
import { simpleAlert } from "../../helpers/alert"

const Posts = () => {

    const [state, setState] = useState()

    useEffect(() => {
        AsyncStorage.getItem("userData").then(userData => {
            const token = JSON.parse(userData).token
            getAllPosts(token).then((allPosts) => {
                console.log(allPosts)
            }).catch(err => {
                simpleAlert("Erro", err)
            })
        })
        
    }, [])

    const renderPosts = () => {
        
    }

    return (
        <View>
            <Text>
                pagina Posts
            </Text>
        </View>
    )
}

export default Posts