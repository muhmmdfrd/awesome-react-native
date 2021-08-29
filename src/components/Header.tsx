import { Box, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconBack } from '../assets';
import { IHeaderProps } from '../types/IHeaderProps';
import { Theme } from '../utils';
import SizeBox from './SizeBox';
 
const Header: React.FC<IHeaderProps> = ({ name, onPress }) => {
  return (
    <Box style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconBack />
      </TouchableOpacity>
      <Text style={styles.text}>{ name }</Text>       
      <SizeBox width={24} />  
    </Box>
  );
}

const { semiBold } = Theme.fonts;
const { black } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 30
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: semiBold,
    color: black,
    alignItems: 'center'
  }
})
 
export default Header;