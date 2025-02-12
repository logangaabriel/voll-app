import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './(tabs)';

const Tab = createNativeStackNavigator();

import Login from "./Login";
import Cadastro from "./Cadastro";


export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Tab.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        <Tab.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
