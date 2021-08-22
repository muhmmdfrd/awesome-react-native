import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { GetStarted, LoginPage, SplashPage } from '../pages';
import RegisterPage from '../pages/RegisterPage';
import { IRoutes } from '../types/IRoutes';

const Stack = createNativeStackNavigator();

// first index first position
// of routing
const routes: IRoutes[] = [
  {
    name: 'Splash',
    component: SplashPage
  },
  {
    name: 'get-started',
    component: GetStarted
  },
  {
    name: 'login',
    component: LoginPage
  },
  {
    name: 'register',
    component: RegisterPage
  }
]

const Route: React.FC = () => {
  return (
    <Stack.Navigator>
      {
        routes.map((v, i) => 
          <Stack.Screen 
            key={i} 
            name={v.name}
            component={v.component} 
            options={{headerShown: false}} 
          />)
      }
    </Stack.Navigator>
  );
}
 
export default Route;