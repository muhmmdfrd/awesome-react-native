import { Box, ScrollView, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Theme } from '../utils';
import { Cover, FirstHospital, SecondHospital, ThirdHospital } from '../assets'
import { HospitalList, SizeBox } from '../components';
 
const HospitalPage: React.FC = () => {
  return(
    <Box style={styles.container}>
      <ImageBackground source={Cover} style={styles.cover}>
        <Box style={styles.headerWrapper}>
          <Text style={styles.header}>Nearby Hospital</Text>
          <SizeBox height={6} />
          <Text style={styles.subHeader}>3 tersedia</Text>
        </Box>
      </ImageBackground>
      
      {/* hospital */}
      <Box style={{
        borderRadius: 20,
        flex: 1
      }}>
      <ScrollView style={styles.scroll}>
        <HospitalList
          name={'Rumah Sakit Citra Bunga Merdeka'}
          address={'Jln. Surya Sejahtera 20'}
          thumbnail={FirstHospital}
        />
        <HospitalList
          name={'Rumah Sakit Anak Happy Family & Kids'}
          address={'Jln. Surya Sejahtera 21'}
          thumbnail={SecondHospital}
        />
        <HospitalList
          name={'Rumah Sakit Jiwa Tingkatan Paling Atas'}
          address={'Jln. Surya Sejahtera 23'}
          thumbnail={ThirdHospital}
        />
      </ScrollView>
      </Box>
      {/* end of hospital */}
    </Box>
  );
}

const { white } = Theme.colors;
const { semiBold, light } = Theme.fonts;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flex: 1,
  },
  headerWrapper: {
    alignItems: 'center',
    marginTop: 30
  },
  header: {
    fontFamily: semiBold,
    fontSize: 20,
    color: white
  },
  subHeader: {
    fontFamily: light,
    fontSize: 14,
    color: white
  },
  cover: {
    width: '100%',
    height: 240,
    borderRadius: 11
  },
  scroll: {
    marginBottom: 30,
  }
});
 
export default HospitalPage;