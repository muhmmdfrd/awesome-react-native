import { Box, ScrollView } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Jannie, Sunny } from '../assets';
import { DoctorCategoryList, HeaderCategory, SizeBox } from '../components';
import { INavProps } from '../types/INavProps';
import { Theme } from '../utils';

export interface DoctorByCategoryProps extends INavProps {

}
 
const DoctorByCategory: React.FC<DoctorByCategoryProps> = ({ navigation, route }) => {
  const { name } = route?.params;

  return(
    <Box style={styles.container}>
      <HeaderCategory name={name} onPress={() => navigation.goBack()} />
      <SizeBox height={4} />
      <ScrollView>
        <DoctorCategoryList
          name='Alexander Jennie' 
          thumbnail={Jannie} 
          gender={'Wanita'} 
          onPress={() => navigation.navigate('doctor-profile', {
            name: 'Alexander Jennie',
            gender: 'Wanita',
            job: name,
            photo: Jannie
          })}
        />
         <DoctorCategoryList
          name='Sunny Frank' 
          thumbnail={Sunny} 
          gender={'Pria'} 
          onPress={() => navigation.navigate('doctor-profile', {
            name: 'Sunny Frank',
            gender: 'Pria',
            job: name,
            photo: Sunny
          })}
        />
          
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white
  }
})
 
export default DoctorByCategory;