import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Picker } from "@react-native-community/picker"
import styles from "./cadastrar2.style"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { simpleAlert } from "../../helpers/alert"
import { userCreate } from "../../routes/users.routes"

const Cadastrar2 = props => {

    const [ state, setState ] = useState()

    useEffect(() => {
        AsyncStorage.getItem("locals").then(localsRes => {
            AsyncStorage.getItem("types").then(typesRes => {
                setState({
                    locals: JSON.parse(localsRes).map(local => {
                            return (
                                <Picker.Item
                                    label = {local.name}
                                    value = {local.id}
                                    key = {local.id}
                                ></Picker.Item>
                            )
                        }),
                    types: JSON.parse(typesRes).map(type => {
                            return (
                                <Picker.Item
                                        label = {type.name}
                                        value = {type.id}
                                        key = {type.id}
                                    ></Picker.Item>
                            )
                        }),
                    local: JSON.parse(localsRes)[0].id,
                    type: JSON.parse(typesRes)[0].id,
                    budget: "1500"
                })
            })
        })
    }, [])

    const register = () => {
        if (state.budget == "") simpleAlert("Atenção", "Insira um orçamento válido")
        else {
            const user = props.route.params
            userCreate(
                user.name,
                user.email,
                user.password,
                state.type,
                state.local,
                state.budget
            ).then(userCreateRes => {
                AsyncStorage.setItem("userData", JSON.stringify(userCreateRes)).then(() => {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: "Menu" }]
                    })
                })
            }).catch(err => {
                simpleAlert("Erro", err)
            })
        }
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.options}>
                <Text style = {styles.options_label}>
                    Selecione o local
                </Text>
                <Picker 
                    style = {styles.options_picker} 
                    onValueChange = {value => setState({...state, local: value})}
                    selectedValue = {state && state.local ? state.local : 0}
                >
                    { state && state.locals ? state.locals : null }
                </Picker>
                <Text style = {styles.options_label}>
                    Selecione o tipo de viagem
                </Text>
                <Picker 
                    style = {styles.options_picker} 
                    onValueChange = {value => setState({...state, type: value})}
                    selectedValue = {state && state.type ? state.type : 0}
                >
                    { state && state.types ? state.types : null }
                </Picker>
                <TextInput 
                    placeholder = "Orçamento" 
                    keyboardType = "decimal-pad" 
                    placeholderTextColor = "white"
                    defaultValue = "1500"
                    onChangeText = {val => setState({ ...state, budget: val })}
                    style = {styles.options_budget}
                ></TextInput>
            </View>
            <View style = {styles.buttonView}>
                <TouchableOpacity style = {styles.buttonView_button} onPress = {() => register()}>
                    <Text style = {{ color: "white" }}>
                        Criar conta
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cadastrar2