import { Box, Image, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { IlustrationGeneralDoctor } from '../assets';
import { Theme } from '../utils';
import SizeBox from './SizeBox';

export interface ServiceCardProps {
  name: string,
  icon: any
}
 
const ServiceCard: React.FC<ServiceCardProps> = ({ name, icon }) => {
  return(
    <Box style={styles.container}>
      <Image source={icon} style={styles.image} alt='icon of service' />
      <SizeBox height={28} />
      <Text style={styles.preText}>saya butuh</Text>
      <Text style={styles.text}>{ name }</Text>
    </Box>
  );
}

const { light, semiBold } = Theme.fonts;
const { black, bgCard } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgCard,
    width: 100,
    height: 130,
    paddingTop: 12,
    paddingStart: 12,
    borderRadius: 10,
    marginEnd: 10
  },
  image: {
    width: 46,
    height: 46
  },
  preText: {
    fontFamily: light,
    fontSize: 12,
    color: black
  },
  text: {
    fontFamily: semiBold,
    fontSize: 12,
    color: black
  }
})
 
export default ServiceCard;