import { Box, Column, Image, Row, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SizeBox } from '.';
import { IconActive, IconAdd, IlustrationUploadPhoto } from '../assets';
import { Theme } from '../utils';

export interface ProfileProps {
  name: string,
  job: string,
  photo?: any,
  isActive?: boolean,
  height?: number, // height of photo profile
  width?: number // width of photo profile
}
 
const Profile: React.FC<ProfileProps> = (
  { 
    name, 
    job, 
    isActive = false, 
    photo = IlustrationUploadPhoto,
    width = 46,
    height = 46
  }) => {
  return(
    <Row>
      <Box>
        <Image source={photo} alt='Photo Profile' style={styles.avatar(width, height)} />
        {isActive ? <IconActive style={styles.active} /> : null}
      </Box>
      <SizeBox width={12} />
      <Column>
        <Text style={styles.name}>{ name }</Text>
        <Text style={styles.job}>{ job }</Text>
      </Column>
    </Row>
  );
}

const { semiBold, regular } = Theme.fonts;
const { black, grey } = Theme.colors;

const styles = StyleSheet.create({
  avatar: (width: number, height: number): any => ({
    width: width,
    height: height
  }),
  name: {
    fontFamily: semiBold,
    fontSize: 16,
    color: black
  },
  job: {
    fontFamily: regular,
    fontSize: 12,
    color: grey
  },
  active: {
    position: 'absolute',
    bottom: 1,
    right: 1
  }
})
 
export default Profile;