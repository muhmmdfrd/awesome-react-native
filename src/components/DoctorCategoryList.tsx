import { Column, Divider, Image, Row, Spacer, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SizeBox } from '.';
import { IconChevronRight } from '../assets';
import { Theme } from '../utils';

export interface DoctorCategoryListProps {
  thumbnail: any,
  name: string,
  gender: string,
  onPress: any
}
 
const DoctorCategoryList: React.FC<DoctorCategoryListProps> = ({ thumbnail, name, gender, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Column>
        <Row style={styles.row}>
          <Image 
            source={thumbnail} 
            alt='thumbnail hospital'
            style={styles.image}
          />
          <SizeBox width={16} />
          <Column>
            <Text numberOfLines={2} style={styles.name}>{ name }</Text>
            <SizeBox height={6} />
            <Text style={styles.address}>{ gender }</Text>
          </Column>
          <Spacer />
          <IconChevronRight />
        </Row>
        <Divider bg={Theme.colors.lineColor} />
      </Column>
    </TouchableOpacity>
  );
}

const { regular, light } = Theme.fonts;
const { black, grey } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  row: {
    margin: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46
  },
  name: {
    fontFamily: regular,
    fontSize: 16,
    color: black,
    maxWidth: 250,
  },
  address: {
    fontFamily: light,
    fontSize: 12,
    color: grey
  }
});
 
export default DoctorCategoryList;