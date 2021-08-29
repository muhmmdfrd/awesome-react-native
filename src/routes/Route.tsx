import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  GetStarted, 
  LoginPage, 
  SplashPage, 
  UploadPhotoPage,
  RegisterPage, 
  DoctorPage, 
  MessagePage, 
  HospitalPage 
} from '../pages';
import { IRoutes } from '../types/IRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTab } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const mainRoutes: IRoutes[] = [
  {
    name: 'Doctor',
    component: DoctorPage
  },
  {
    name: 'Messages',
    component: MessagePage
  },
  {
    name: 'Hospitals',
    component: HospitalPage
  }
];

const MainRoute: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      {
        mainRoutes.map((v, i) => 
        <Tab.Screen
          key={i}
          name={v.name}
          component={v.component}
          options={{headerShown: false}}
        />)
      }
    </Tab.Navigator>
  )
}

// This route for stack navigator
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
  },
  {
    name: 'upload-photo',
    component: UploadPhotoPage
  },
  {
    name: 'main-app',
    component: MainRoute
  }
];

const Route: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Splash'}>
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