import { Box, Button, KeyboardAvoidingView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import { Header, SizeBox } from '../components';
import { InputText } from './../components';
import { INavProps } from '../types/INavProps';

const RegisterPage: React.FC<INavProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [isKeyboardShown, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus(true));
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior={'position'}>
      <Header name='Register Account' onPress={() => navigation.goBack()} />
      <Box style={styles.container}>
        <SizeBox height={40} />
        <InputText label='Full Name' value={name} onChange={(v: string) => setName(v)} />
        <InputText label='Job' value={job} onChange={(v: string) => setJob(v)} />
        <InputText label='Email Address' type='email' value={email} onChange={(v: string) => setEmail(v)} />
        <InputText label='Password' type='password' value={password} onChange={(v: string) => setPasword(v)} />
        <SizeBox height={isKeyboardShown ? 0 : 40} />
        <Button onPress={() => navigation.navigate('upload-photo')}>Continue</Button>
      </Box>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40
  }
})
 
export default RegisterPage; 