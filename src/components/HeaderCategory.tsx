import { Row, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconBackWhite } from '../assets';
import { Theme } from '../utils';

export interface HeaderCategoryProps {
  name: string,
  onPress: any
}
 
const HeaderCategory: React.FC<HeaderCategoryProps> = ({ onPress, name }) => {
  return(
    <Row style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconBackWhite />
      </TouchableOpacity>
      <Text style={styles.text}>Pilih Dokter { name }</Text>
    </Row>
  );
}

const { black, white } = Theme.colors;
const { semiBold } = Theme.fonts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20
  },
  text: {
    fontFamily: semiBold,
    fontSize: 20,
    color: white,
    flex: 1,
    textAlign: 'center'
  }
})
 
export default HeaderCategory;