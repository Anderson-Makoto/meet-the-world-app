import React, { useState } from "react"
import { View, TouchableOpacity, TextInput, Text } from "react-native"
import styles from "./cadastrar.style"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { simpleAlert } from "../../helpers/alert"
import { emailValidation, nameValidation, passwordValidation } from "../../helpers/input_validation"

const Cadastrar = props => {
    const [userData, setUserData] = useState({
        "email": "",
        "name": "",
        "password": "",
        "repeatPassword": ""
    })

    const setData = (key, val) => {
        setUserData({
            ...userData,
            [key]: val
        })
    }

    const goToNextPage = () => {
        if (!nameValidation(userData.name)) simpleAlert("Atenção", "Digite um nome válido")
        else if (!emailValidation(userData.email)) simpleAlert("Atenção", "Digite um email válido")
        else if (!passwordValidation(userData.password)) simpleAlert("Atenção", "Digite uma senha válida, entre 6 e 15 caracteres alfanuméricos")
        else if (userData.password != userData.repeatPassword) simpleAlert("Atenção", "As senhas não são iguais")
        else {
            props.navigation.navigate("Cadastrar2", userData)
        }
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.textInput}>
                <TextInput 
                    placeholder = "Nome" 
                    placeholderTextColor = "white" 
                    style = {styles.textInput_text}
                    onChangeText = {text => setData("name", text)}
                ></TextInput>
                <TextInput 
                    placeholder = "Email" 
                    placeholderTextColor = "white" 
                    style = {styles.textInput_text} 
                    keyboardType = "email-address"
                    onChangeText = {text => setData("email", text)}
                ></TextInput>
                <TextInput 
                    placeholder = "Senha" 
                    placeholderTextColor = "white" 
                    style = {styles.textInput_text} 
                    secureTextEntry = {true}
                    onChangeText = {text => setData("password", text)}
                ></TextInput>
                <TextInput 
                    placeholder = "Repetir senha" 
                    placeholderTextColor = "white" 
                    style = {styles.textInput_text} 
                    secureTextEntry = {true}
                    onChangeText = {text => setData("repeatPassword", text)}
                ></TextInput>
            </View>
            <View style = {styles.buttonSpace}>
                <TouchableOpacity style = {styles.buttonSpace_button} onPress = {() => goToNextPage()}>
                    <Text>
                        <Icon name="angle-right" size={30} color="white" />
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Cadastrar