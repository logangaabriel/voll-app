import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Principal from "./Principal";
import Consulta from "./Consulta";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

const tabs = [
    {
        name: 'Principal',
        component: Principal,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Consulta,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    }
];

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#002851"
                },
                tabBarActiveTintColor: "#339CFF",
                tabBarInactiveTintColor: "#FFF"
            }}
        >
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name={tab.icon} color={color} size={size} />
                        )
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}
