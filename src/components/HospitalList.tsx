import { Column, Divider, Image, Row, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '../utils';
import SizeBox from './SizeBox';

export interface HospitalListProps {
  name: string,
  address: string,
  thumbnail: any
}
 
const HospitalList: React.FC<HospitalListProps> = ({ name, address, thumbnail }) => {
  return (
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
          <Text style={styles.address}>{ address }</Text>
        </Column>
      </Row>
      <SizeBox height={16} />
      <Divider bg={Theme.colors.lineColor} />
    </Column>
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
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 15,
    marginTop: 16,
    marginStart: 16
  },
  name: {
    fontFamily: regular,
    fontSize: 16,
    color: black,
    maxWidth: 250,
    marginTop: 16
  },
  address: {
    fontFamily: light,
    fontSize: 12,
    color: grey
  }
})
 
export default HospitalList;