import { Box, Button, Center, Text, TextField } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IlustrationLogo } from '../assets';
import { SizeBox } from '../components';
 
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box style={styles.container}>
      <Box>
        <IlustrationLogo />
        <Text style={styles.desc}>Masuk dan mulai berkonsultasi</Text>
      </Box>
      
      {/* form group */}
      <Box>
        <Text style={styles.label}>Email Address</Text>
        <SizeBox height={6} />
        <TextField style={styles.input} type={'email'} onChangeText={(value) => setUsername(value)} />
        <SizeBox height={24} />
        <Text style={styles.label}>Password</Text>
        <SizeBox height={6} />
        <TextField style={styles.input} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
        <Text style={styles.note}>Forgot Password</Text>
      </Box>

      {/* submit */}
      <Box>
        <Button onPress={() => console.log({ username, password })}>Sign In</Button>
        <SizeBox height={30} />
        <Center>
          <Text style={styles.label}>Create New Account</Text>
        </Center>
      </Box>
    </Box>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-around'
  },
  desc: {
    marginTop: 40,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#112340',
    maxWidth: 153
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#7D8797'
  },
  note: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#7D8797'
  },
  input: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    padding: 12
  }
})
 
export default LoginPage;