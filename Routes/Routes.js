import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

export default function Routes(){
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="Perfil" component={Perfil}/>
        </Tabs.Navigator>
    )
}