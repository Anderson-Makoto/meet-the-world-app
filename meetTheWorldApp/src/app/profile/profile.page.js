import React from "react"
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native"
import styles from "./profile.style"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { logout } from "../../routes/users.routes"
import { confirmationAlert, simpleAlert } from "../../helpers/alert"

const Profile = props => {

    const logoutUser = () => {
        AsyncStorage.getItem("userData").then(userData => {
            const id = JSON.parse(userData).data.id
            const token = JSON.parse(userData).token
            logout(id, token).then(logoutRes => {
                AsyncStorage.removeItem("userData").then(() => {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }]
                    })
                })
            }).catch(err => {
                simpleAlert("Erro", err)
            })
        })
    }

    const confirmLogout = () => {
        confirmationAlert("Logoff", "Você realmente deseja sair?", logoutUser)
    }

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = { styles.sairButton } onPress = {() => confirmLogout()}>
                <Text style = { styles.sairButton_text }>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    )

}

export default Profile