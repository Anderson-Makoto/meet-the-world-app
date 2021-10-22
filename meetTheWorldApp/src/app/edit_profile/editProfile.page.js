import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./editProfile.style"
import { Picker } from "@react-native-community/picker"
import { updateUser } from "../../routes/users.routes"
import { confirmationAlert, simpleAlert } from "../../helpers/alert"

const EditProfile = props => {

    const [ state, setState ] = useState()

    useEffect(() => {
        AsyncStorage.getItem("userData").then(userData => {
            console.log(userData)
            AsyncStorage.getItem("locals").then(localsRes => {
                AsyncStorage.getItem("types").then(typesRes => {
                    setState({
                        user: JSON.parse(userData).data,
                        token: JSON.parse(userData).token,
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
                        budget: JSON.parse(userData).data.budget
                  })
                })
            })
        })
    }, [])

    const askIfUpdate = () => {

        confirmationAlert("Salvar", "Você deseja atualizar suas informações?", saveUpdate)

    }

    const saveUpdate = () => {
        const userData = {
            name: state.user.name,
            tipo_id: state.type,
            local_id: state.local,
            budget: state.budget,
            id: state.user.id
        }
        console.log(state.token, userData)
        updateUser(userData, state.token).then(updateUserRes => {
            AsyncStorage.getItem("userData").then(userDataRes => {
                const user = JSON.parse(userDataRes)
                const newUserData = {
                    ...user,
                    data: {
                        ...user.data,
                        ...userData
                   }
                }
                console.log(newUserData, "aqui")
                AsyncStorage.setItem("userData", JSON.stringify(newUserData)).then(() => {
                    props.navigation.goBack()
                })
            })
            
        }).catch(err => {
            
            simpleAlert("Erro", err)
        })
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.categoryName}>Nome</Text>
            <TextInput 
                placeholder = "Nome" 
                placeholderTextColor = "white"
                style = {styles.textInput}
                onChangeText = {value => {
                    let newState = state
                    newState.user.name = value
                    setState(newState)
                }}
                >
                    { state && state.user && state.user.name ? state.user.name : null }
            </TextInput>
            <Text style = {styles.categoryName}>Orçamento</Text>
            <TextInput 
                placeholder = "Orçamento" 
                keyboardType = "decimal-pad" 
                placeholderTextColor = "white"
                style = {styles.textInput}
            >
                    { state && state.user && state.user.budget ? state.user.budget : null }
            </TextInput>
            <Text style = {styles.categoryName}>Local</Text>
            <Picker 
                style = {styles.picker} 
                onValueChange = {value => setState({...state, type: value})}
                selectedValue = {state && state.type ? state.type : 0}
            >
                    { state && state.types ? state.types : null }
            </Picker>
            <Text style = {styles.categoryName}>Tipo</Text>
            <Picker 
                style = {styles.picker} 
                onValueChange = {value => setState({...state, local: value})}
                selectedValue = {state && state.local ? state.local : 0}
            >
                    { state && state.locals ? state.locals : null }
            </Picker>
            <View style = {styles.buttons}>
                <TouchableOpacity style = {styles.buttons_button} onPress = {() => props.navigation.goBack()}>
                    <Text style = {styles.buttons_button_text}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttons_button} onPress = {() => askIfUpdate()}>
                    <Text style = {styles.buttons_button_text}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditProfile