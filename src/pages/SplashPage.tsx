import { Box, Text } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { IlustrationLogo } from '../assets';
import { INavProps } from '../types/INavProps';

const SplashPage: React.FC<INavProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('get-started');
    }, 3000);
  }, []);

  return (
    <Box flex={1} justifyContent='center' alignItems='center'>
      <Box style={styles.logo}>
        <IlustrationLogo />
      </Box>
      <Text style={styles.text}>Splash Pages</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 75,
    width: 86
  },
  text: {
    fontSize: 20,
    color: '#112340',
    fontFamily: 'Nunito-SemiBold',
    marginTop: 20
  }
})
 
export default SplashPage;