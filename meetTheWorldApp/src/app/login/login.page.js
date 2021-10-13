import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native"
import { simpleAlert } from "../../helpers/alert"
import { emailValidation, passwordValidation } from "../../helpers/input_validation"
import { login } from "../../routes/users.routes"
import styles from "./login.style"

const Login = props => {
    let email = "", password = ""

    const userLogin = () => {
        if (!emailValidation(email)) simpleAlert("Atenção", "Digite um email válido")
        else if (!passwordValidation(password)) simpleAlert("Atenção", "Digite uma senha válida. Entre 6 e 15 caracteres alfanuméricos")
        else {
            login(email, password).then(userLoginRes => {
                AsyncStorage.setItem("userData", JSON.stringify(userLoginRes)).then(() => {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "Menu" }]
                    })
                })
            }).catch(err => simpleAlert("Erro", toString(err)))
        }
    }

    return (
        
        <View style = {styles.container}>
        <ImageBackground source={require("../../resources/login-wallpaper.jpg")} style = {styles.image} resizeMode="cover"></ImageBackground>
            <View style = {styles.inputs}>
                <TextInput 
                    placeholder="Email" 
                    placeholderTextColor = "white" 
                    style = {styles.inputs_button}
                    keyboardType = "email-address"
                    onChangeText = {value => email = value}
                ></TextInput>
                <TextInput 
                    placeholder="Senha" 
                    placeholderTextColor = "white" 
                    style = {styles.inputs_button}
                    secureTextEntry = {true}
                    onChangeText = {value => password = value}
                ></TextInput>
            </View>
            <View style = {styles.buttons}>
                <TouchableOpacity style = {styles.buttons_button} onPress = {() => props.navigation.navigate("Cadastrar")}>
                    <Text style = {styles.buttons_button_text}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttons_button} onPress = { () => userLogin() }>
                    <Text style = {styles.buttons_button_text}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Login