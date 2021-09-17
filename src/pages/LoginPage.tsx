import { Box, Button, Center, KeyboardAvoidingView, Text } from 'native-base';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { IlustrationLogo } from '../assets';
import { SizeBox } from '../components';
import InputText from '../components/InputText';
import TextLink from '../components/TextLink';
import { INavProps } from '../types/INavProps';
import { Theme } from '../utils';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './../configs' 

const LoginPage: React.FC<INavProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardShown, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus(true));
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
      .then((credential) => {
        const user = credential.user;
        console.log(user);
        navigation.replace('main-app');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Box>
        {isKeyboardShown ? null : <IlustrationLogo />}
        <Text style={styles.desc}>Masuk dan mulai berkonsultasi</Text>
      </Box>
      
      {/* form group */}
      <Box style={styles.formGroup}>
        <InputText label='Email Address' type='email' value={username} onChange={(e: string) => setUsername(e)} />
        <InputText label='Password' type='password' value={password} onChange={(e: string) => setPassword(e)} />
        <Text style={styles.note}>Forgot Password</Text>
      </Box>

      {/* submit */}
      <Box>
        <Button onPress={() => login()}>Sign In</Button>
        <SizeBox height={30} />
        <Center>
          <TouchableWithoutFeedback onPress={() => console.log('pres') }>
            <TextLink text={'Create New Account'} />
          </TouchableWithoutFeedback>
        </Center>
      </Box>
    </KeyboardAvoidingView>
    
  );
}

// font theme
const { regular, semiBold } = Theme.fonts;
const { black, grey } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-around'
  },
  desc: {
    fontFamily: semiBold,
    fontSize: 20,
    color: black,
    maxWidth: 153,
    marginTop: 10
  },
  note: {
    fontFamily: regular,
    fontSize: 12,
    color: grey
  },
  formGroup: {
    marginTop: 70,
    marginBottom: 50
  }
});
 
export default LoginPage;