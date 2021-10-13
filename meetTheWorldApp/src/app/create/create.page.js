import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"
import {launchImageLibrary} from 'react-native-image-picker';
import { storageReadPermission } from "../../helpers/permissions";
import { Picker } from "@react-native-community/picker"
import { createPost } from "../../routes/posts.route"
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "./create.style"
import { simpleAlert } from "../../helpers/alert";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Create = props => {

    const [ state, setState ] = useState({
        images: {}
    })

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
                    ...state
                })
            })
        })
    }, [])

    const getImages = () => {
        if (Object.keys(state.images).length < 5) {
            launchImageLibrary({
                mediaType: "photo"
            }, res => {
                if (res.didCancel) {
                    
                } else if (res.assets) {
                    const image = res.assets[0]
                    setState({
                        ...state, images: { ...state.images,  [image.fileName]: image}
                    })
                }
            })            
        } else {
            simpleAlert("Atenção", "Você pode fazer upload de no máximo 5 imagens")
        }
        
    }

    const renderImages = () => {
        let imageList = []
        for (const image in state.images) {
            imageList.push(
                <View style = {styles.imageContainer} key = {image}>
                    <ImageBackground source = {{ uri: state.images[image].uri }} style = {styles.imageContainer_images} resizeMode = "cover" ></ImageBackground>
                    <TouchableOpacity style = {styles.imageContainer_delete} onPress = {() => deleteImage(image)}>
                        <Icon name = "minus-circle" color = "red" size = {25}></Icon>
                    </TouchableOpacity>
                    
                </View>
            )
            
        }

        return imageList
        
        
    }

    const askForPermission = () => {
        storageReadPermission(getImages)
    }

    const deleteImage = key => {
        let updatedImages = state.images
        delete updatedImages[key]

        setState({
            ...state, images: updatedImages
        })
    }

    return (
            <ScrollView contentContainerStyle = {styles.container}>
                <TextInput placeholder = "Título" placeholderTextColor = "white" maxLength = {40} style = {styles.title}></TextInput>
                <TouchableOpacity onPress = {() => askForPermission()} style = {styles.uploadPhotosContainer}>
                    <Text style = {styles.uploadPhotosContainer_text}>
                        Upload imagens
                    </Text>
                </TouchableOpacity>
                {renderImages()}
                <TextInput 
                    placeholder = "Descrição" 
                    placeholderTextColor = "white" 
                    maxLength = {1500} 
                    multiline = {true} 
                    textAlignVertical = "top"
                    style = {styles.descrption}
                >
                </TextInput>
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
                    onChangeText = {val => setState({ ...state, budget: val })}
                    style = {styles.options_budget}
                ></TextInput>
                <View style = {styles.buttonsView}>
                    <TouchableOpacity style = {styles.cancelButton}>
                        <Text style = {styles.uploadPhotosContainer_text}>
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.saveButton}>
                        <Text style = {styles.uploadPhotosContainer_text}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}

export default Create