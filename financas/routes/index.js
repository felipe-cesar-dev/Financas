import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../screens/Inicio';
import Lista from '../screens/Inicio/lista';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inserir Manutenções" component={Inicio} />
      <Tab.Screen name="Lista de Manutenções" component={Lista} />
    </Tab.Navigator>
  );
}