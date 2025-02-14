import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../pages/inicio';
import Lista from '../pages/lista';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Inicio} />
      <Tab.Screen name="Profile" component={Lista} />
    </Tab.Navigator>
  );
}