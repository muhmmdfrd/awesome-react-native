import { Box, Image, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../utils';
import SizeBox from './SizeBox';

export interface ServiceCardProps {
  name: string,
  icon: any,
  onPress: any
}
 
const ServiceCard: React.FC<ServiceCardProps> = ({ name, icon, onPress }) => {
  return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.image} alt='icon of service' />
      <SizeBox height={28} />
      <Text style={styles.preText}>saya butuh</Text>
      <Text style={styles.text}>{ name }</Text>
    </TouchableOpacity>
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