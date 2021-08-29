import { Box, Button, Image, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { IconFemale, IconMale } from '../assets';
import { Header, LabelProfile, SizeBox } from '../components';
import { INavProps } from '../types/INavProps';
import { Theme } from '../utils';

export interface DoctorProfileProps extends INavProps {
  
}
 
const DoctorProfile: React.FC<DoctorProfileProps> = ({ navigation, route }) => {
  const { photo, name, job, gender } = route?.params;

  return(
    <Box style={styles.root}>
      
      <Header name='Profile' onPress={() => navigation.goBack()} />
      <Box style={styles.container}>
        {/* profile */}
        <Box style={styles.profileWrapper}>
          <Box style={styles.imageWrapper}>
            <Image style={styles.profile} source={photo} alt='profile picture of doctor' />
            <Image 
              style={styles.icon} 
              source={gender === 'Wanita' ? IconFemale : IconMale} 
              alt='icon of gender' 
            />
          </Box>
          <Text style={styles.name}>{ name }</Text>
          <SizeBox height={2} />
          <Text style={styles.job}>{ job }</Text>
        </Box>
        {/* end of profile */}
        
        <Box>
          <LabelProfile label='Alumnus' value='Universitas Indonesia, 2020' />
          <LabelProfile label='Tempat Praktik' value='Rumah Sakit Umum, Bandung' />
          <LabelProfile label='No. Str' value='0000116622081996' />
        </Box>

        <Box>
          <Button style={styles.button}>Start Consultation</Button>
        </Box>
      </Box>
    </Box>
  );
}

const { semiBold, regular } = Theme.fonts;
const { black, grey, border, white } = Theme.colors;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: white
  },
  container: {
    marginHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between'
  },
  profileWrapper: {
    alignItems: 'center',
  },
  imageWrapper: {
    width: 130,
    height: 130,
    borderColor: border,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 3,
    right: 2
  },
  profile: {
    width: 110,
    height: 110
  },
  name: {
    fontFamily: semiBold,
    fontSize: 20,
    color: black
  },
  job: {
    fontFamily: regular,
    fontSize: 16,
    color: grey
  },
  button: {
    borderRadius: 10
  }
})
 
export default DoctorProfile;