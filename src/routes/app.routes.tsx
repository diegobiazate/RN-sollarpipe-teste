import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

export function AppRoute(){
  return(
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name='signin'
        component={ Login }
      />

      <Screen 
        name='home'
        component={ Home }
      />

    </Navigator>
  )
}