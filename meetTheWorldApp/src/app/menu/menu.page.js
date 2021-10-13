import React,  { useState } from "react"
import { View, TouchableOpacity } from "react-native"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { colors } from "../../helpers/constants"
import Posts from "../posts/posts.page"
import Create from "../create/create.page"
import Profile from "../profile/profile.page"
import styles from "./menu.style"

const Menu = props => {

    const [ state, setState ] = useState({
        page: 0
    })

    const selectPage = () => {
        if (state.page == 0) return <Posts></Posts>
        else if (state.page == 1) return <Create></Create>
        else return <Profile navigation = {props.navigation}></Profile>
    }

    return (
        <View style = { styles.container }>
            <View style = {styles.page}>
                { selectPage() }
            </View>
            <View style = {styles.menu}>
                <TouchableOpacity 
                    style = {{ 
                        ...styles.posts, 
                        backgroundColor: state.page == 0 ? colors.BACKGROUND_COLOR_1 : colors.BACKGROUND_COLOR_2 
                    }}
                    onPress = {() => setState({ ...state, page: 0 })}
                >
                    <FontAwesome5Icon name = "globe-americas" size = {50} color = "white"></FontAwesome5Icon>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {{ 
                        ...styles.create, 
                        backgroundColor: state.page == 1 ? colors.BACKGROUND_COLOR_1 : colors.BACKGROUND_COLOR_2 
                    }}
                    onPress = {() => setState({ ...state, page: 1 })}
                >
                    <FontAwesome5Icon name = "edit" size = {50} color = "white"></FontAwesome5Icon>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {{ 
                        ...styles.profile, 
                        backgroundColor: state.page == 2 ? colors.BACKGROUND_COLOR_1 : colors.BACKGROUND_COLOR_2 
                    }}
                    onPress = {() => setState({ ...state, page: 2 })}
                >
                    <FontAwesome5Icon name = "user-circle" size = {50} color = "white"></FontAwesome5Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}

export default Menu