import { Box, Text, TextField } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { IInputTextProps } from '../types/IInputTextProps';
import SizeBox from './SizeBox';

const InputText: React.FC<IInputTextProps> = ({ label, type = 'text', onChange, value }) => {
  return (
    <Box>
      <Text style={styles.label}>{ label }</Text>
      <SizeBox height={6} />
      <TextField 
        style={styles.input} 
        type={type} 
        onChangeText={onChange} 
        value={value}
      />
    </Box>
  );
}
 
const styles = StyleSheet.create({
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#7D8797'
  },
  input: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    padding: 12
  }
})

export default InputText;