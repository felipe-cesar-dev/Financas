import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../pages/inicio';
import Lista from '../pages/lista';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inserir Manutenções" component={Inicio} />
      <Tab.Screen name="Lista de Manutenções" component={Lista} />
    </Tab.Navigator>
  );
}