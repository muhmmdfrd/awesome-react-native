import { Box, Text } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { IlustrationLogo } from '../assets';
import { INavProps } from '../types/INavProps';
import { Theme } from '../utils';

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

const { semiBold } = Theme.fonts;
const { black } = Theme.colors;

const styles = StyleSheet.create({
  logo: {
    height: 75,
    width: 86
  },
  text: {
    fontSize: 20,
    color: black,
    fontFamily: semiBold,
    marginTop: 20
  }
})
 
export default SplashPage;