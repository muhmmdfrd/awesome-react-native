import { Box } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ISizeBox } from '../types/ISizeBox';
 
const SizeBox: React.FC<ISizeBox> = (props: ISizeBox) => {
  const { height, width } = props;
  
  return (
    <Box style={{ width: width, height: height }} />
  );
} 
export default SizeBox;