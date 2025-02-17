import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './routes';
import SignIn from './screens/SignIn';


export default function App() {
  return (
      <NavigationContainer>
        <SignIn/>
      </NavigationContainer>
  );
}

