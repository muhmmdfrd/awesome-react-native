import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Route from './routes/Route';

 const App: React.FC = () => {  
   return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </NativeBaseProvider>
   );
 };

 export default App;
