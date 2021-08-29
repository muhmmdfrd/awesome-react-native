import { Box, Divider, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '../utils';
import SizeBox from './SizeBox';

export interface LabelProfileProps {
  label: string,
  value: string
}
 
const LabelProfile: React.FC<LabelProfileProps> = ({ label, value }) => {
  return(
    <Box>
      <Box style={styles.container}>
        <Text style={styles.label}>{ label }</Text>
        <SizeBox height={6} />
        <Text style={styles.value}>{ value }</Text>
      </Box>
      <Divider bg={border} />
    </Box>
  );
}

const { regular } = Theme.fonts;
const { grey, black, border } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    paddingVertical: 16,
  },
  label: {
    fontFamily: regular,
    fontSize: 14,
    color: grey
  },
  value: {
    fontFamily: regular,
    fontSize: 14,
    color: black
  }
})
 
export default LabelProfile;