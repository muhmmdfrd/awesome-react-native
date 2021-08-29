import { Box, Row, ScrollView, Text, usePropsResolution } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { 
  Alexa, 
  FirstNews, 
  IlustrationChildren, 
  IlustrationFarmacy, 
  IlustrationGeneralDoctor, 
  IlustrationPsikater,
  Poe, 
  SecondNews, 
  Shayna, 
  Sunny, 
  ThirdNews 
} from '../assets';
import { Profile, RatedDoctor, ServiceCard, SizeBox, News } from '../components';
import { INavProps } from '../types/INavProps';
import { Theme } from '../utils';
 
const DoctorPage: React.FC<INavProps> = ({ navigation }) => {
  return(
    <Box style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* My profile */}
        <Box style={styles.top}>
          <SizeBox height={30} />
          <Profile name='Shayna Melinda' job='Product Designer' photo={Shayna} />
          <Text style={styles.desc}>Mau konsultasi dengan siapa hari ini?</Text>
        </Box>
        {/* end of my profile */}

        {/* Category of doctor */}
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Row>
            <SizeBox width={16} />
            <ServiceCard 
              name='Dokter Umum' 
              icon={IlustrationGeneralDoctor} 
              onPress={() => navigation.navigate('doctor-category', { name: 'Dokter Umum' })}
            />
            <ServiceCard 
              name='Psikiater' 
              icon={IlustrationPsikater} 
              onPress={() => navigation.navigate('doctor-category', { name: 'Psikiater' })}
            />
            <ServiceCard 
              name='Dokter Obat' 
              icon={IlustrationFarmacy} 
              onPress={() => navigation.navigate('doctor-category', { name: 'Dokter Obat' })}
            />
            <ServiceCard 
              name='Dokter Anak' 
              icon={IlustrationChildren} 
              onPress={() => navigation.navigate('doctor-category', { name: 'Dokter Anak' })}
            />
          </Row>
        </ScrollView>
        {/* End of category */}

        {/* Top rated doctor */}
        <Box style={styles.top}>
          <Text style={styles.heading}>Top Rated Doctors</Text>
          <RatedDoctor key={0} name='Alexa Rachel' job='Pediacritian' photo={Alexa} rating={5} />
          <RatedDoctor key={1} name='Sunny Frank' job='Dentist' photo={Sunny} isActice={true} rating={3} />
          <RatedDoctor key={2} name='Poe Minn' job='Podiatrist' photo={Poe} rating={4} />
        </Box>
        {/* End of top rated doctor */}

        {/* News */}
        <Box style={styles.top}>
          <Text style={styles.heading}>Good News</Text>
          <News title='Is it safe to stay at home during coronavirus?' thumbnail={FirstNews} />
          <News title='Consume yellow citrus helps you healthier' thumbnail={SecondNews} />
          <News title='Learn how to make a proper orange juice at home' thumbnail={ThirdNews} />
        </Box>
        {/* End of news */}

      </ScrollView>
    </Box>
  );
}

const { semiBold } = Theme.fonts;
const { black, white } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  },
  top: {
    paddingHorizontal: 16
  },
  desc: {
    fontFamily: semiBold,
    fontSize: 20,
    color: black,
    maxWidth: 209,
    marginTop: 30,
    marginBottom: 16
  },
  cardWrapper: {
    justifyContent: 'space-between'
  },
  heading: {
    fontFamily: semiBold,
    fontSize: 16,
    color: black,
    marginTop: 30,
    marginBottom: 16
  }
})
 
export default DoctorPage;