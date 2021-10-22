import React from "react"
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native"
import styles from "./profile.style"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { logout } from "../../routes/users.routes"
import { confirmationAlert, simpleAlert } from "../../helpers/alert"
var pkg = require('../../../package.json');

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

    const showAbout = () => {
        simpleAlert("Sobre o aplicativo", `Aplicativo desenvolvido por Anderson Makoto Shinoda.\nVersão: ${pkg.version}`)
    }

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = { styles.editarButton } onPress = {() => props.navigation.navigate("editProfile")}>
                <Text style = { styles.editarButton_text }>
                    Editar perfil
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.editarButton } onPress = {() => showAbout()}>
                <Text style = { styles.editarButton_text }>
                    Sobre
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.sairButton } onPress = {() => confirmLogout()}>
                <Text style = { styles.sairButton_text }>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    )

}

export default Profile