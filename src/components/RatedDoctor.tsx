import { Box, Row, Spacer } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { IconStar, IconStarInactive } from '../assets';
import Profile from './Profile';

export interface RatedDoctorProps {
  name: string,
  job: string,
  photo?: any,
  isActice?: boolean,
  rating: number
}
 
const RatedDoctor: React.FC<RatedDoctorProps> = ({ name, job, photo, isActice, rating }) => {
  return(
    <Box style={styles.container}>
      <Row>
        <Profile name={name} job={job} photo={photo} isActive={isActice} height={50} width={50} />
        <Spacer />
        <Box style={styles.starWrapper}>
          <Row>
            {
              [1, 1, 1, 1, 1].map((v, i) =>
                rating > i ? <IconStar key={i} /> : <IconStarInactive key={i} />
              )
            }
          </Row>
        </Box>
      </Row>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  starWrapper: {
    justifyContent: 'center'
  }
})
 
export default RatedDoctor;