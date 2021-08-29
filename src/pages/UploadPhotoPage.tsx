import { Box, Button, Center, Image, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { backgroundColor, padding } from 'styled-system';
import { IconAdd, IlustrationUploadPhoto } from '../assets';
import { Header, SizeBox } from '../components';
import TextLink from '../components/TextLink';
import { INavProps } from '../types/INavProps';
import { Theme } from '../utils';
 
const UploadPhotoPage: React.FC<INavProps> = ({ navigation }) => {
  return(
    <Box style={styles.container}>
      <Header name={'Upload Photo'} onPress={() => navigation.goBack()} />
      <Box style={styles.content}>
        <Box style={styles.profile}>
          <Box style={styles.avatarWrapper}>
            <Image 
              source={IlustrationUploadPhoto} 
              alt='null photo profile' 
              style={styles.avatar} 
            />
            <IconAdd style={styles.icon} />
          </Box>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.job}>Product Designer</Text>
        </Box>
        <Box>
          <Button>Upload and Continue</Button>
          <SizeBox height={30} />
          <Center>
            <TextLink text={'Skip For Now'} />
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

const { border, black, grey } = Theme.colors;
const { semiBold, regular } = Theme.fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between'
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: border,
    borderRadius: 130 / 2, // width or height divided by 2 
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 110,
    height: 110
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 6
  },
  name: {
    fontFamily: semiBold,
    fontSize: 24,
    color: black
  },
  job: {
    fontFamily: regular,
    fontSize: 18,
    color: grey
  }
})
 
export default UploadPhotoPage;