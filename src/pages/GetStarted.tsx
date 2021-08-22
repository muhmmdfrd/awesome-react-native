import { Box, Button, Text } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { IlustrationGetStarted, IlustrationLogo } from '../assets';
import { SizeBox } from '../components';
import { INavProps } from '../types/INavProps';
 
const GetStarted: React.FC<INavProps> = ({ navigation }) => {
  return (
    <ImageBackground source={IlustrationGetStarted} style={styles.box}>
      <Box>
        <IlustrationLogo />
        <Text style={styles.desc}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </Box>
      <Box>
        <Button 
          style={styles.btnGetStarted} 
          _text={styles.textGetStarted}
          onPress={() => navigation.navigate('register')}
        >
          Sign Up
        </Button>
        <SizeBox height={16} />
        <Button 
          style={styles.btnSignIn} 
          _text={styles.textSignIn}
          onPress={() => navigation.navigate('login')}
        >
          Sign In
        </Button>
      </Box>
    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  box: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1
  },
  desc: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold'
  },
  btnGetStarted: {
    backgroundColor: '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnSignIn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 10,
  },
  textGetStarted: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18
  },
  textSignIn: {
    color: '#112340',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18
  }
})
export default GetStarted;