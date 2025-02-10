import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cadastro from "./Cadastro";
import Login from "./Login";

const Tab = createNativeStackNavigator(); 

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Cadastro" component={Cadastro} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
