import React, { useState } from "react"
import { View, Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { getAllLocals } from "./src/routes/local.route"
import { getAllTypes } from "./src/routes/tipo.routes"

import Login from "./src/app/login/login.page"
import Cadastrar from "./src/app/cadastrar/cadastrar.page"
import Cadastrar2 from "./src/app/cadastrar_2/cadastrar2.page"
import Menu from "./src/app/menu/menu.page"
import EditProfile from "./src/app/edit_profile/editProfile.page";

const Stack = createNativeStackNavigator()

const App = () => {

  const [page, setPage] = useState("")
  let keepLoading = true

  getAllLocals().then(localsRes => {
    getAllTypes().then(typesRes => {
      AsyncStorage.setItem("locals", JSON.stringify(localsRes.data)).then(() => {
        AsyncStorage.setItem("types", JSON.stringify(typesRes.data)).then(() => {
          keepLoading = false
        })
      })
    })
  })

  AsyncStorage.getItem("userData").then(val => {
    setPage(val ? "Menu" : "Login")
  })

  if (page == "" &&  keepLoading) {
    return (
      <View>
        <Text>
          Carregando...
        </Text>
      </View>
    )
  }

 return (
  <NavigationContainer>
    <Stack.Navigator 
        initialRouteName = { page }
        screenOptions = {{ 
          headerShown: false
        }}
      >
      <Stack.Screen 
        name = "Login" 
        component = {Login}
      ></Stack.Screen>
      <Stack.Screen 
        name = "Menu" 
        component = {Menu}
      ></Stack.Screen>
      <Stack.Screen 
        name = "Cadastrar" 
        component = {Cadastrar}
      ></Stack.Screen>
      <Stack.Screen 
        name = "Cadastrar2" 
        component = {Cadastrar2}
      ></Stack.Screen>
      <Stack.Screen 
        name = "editProfile" 
        component = {EditProfile}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
 )
}

export default App