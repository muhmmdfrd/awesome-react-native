import { Box, Column, Divider, Image, Row, Spacer, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FirstNews } from '../assets';
import { Theme } from '../utils';
import SizeBox from './SizeBox';

export interface NewsProps {
  title: string,
  thumbnail: any,
  date?: string
}
 
const News: React.FC<NewsProps> = ({ title, thumbnail, date = 'Today' }) => {
  return(
    <Box style={styles.container}>
      <Row style={styles.row}>
        <Column>
          <Text style={styles.title}>{ title }</Text>
          <SizeBox height={4} />
          <Text style={styles.time}>{ date }</Text>
        </Column>
        <Spacer />
        <Image style={styles.thumbnail} source={thumbnail} alt='thumbnail' />
      </Row>
      <Divider style={{marginBottom: 16}} />
    </Box>
  );
}

const { semiBold, regular } = Theme.fonts;
const { black, grey } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
  },
  title: {
    maxWidth: 180,
    maxHeight: 44,
    fontFamily: semiBold,
    fontSize: 16,
    color: black
  },
  thumbnail: {
    width: 80,
    height: 60
  },
  time: {
    fontFamily: regular,
    fontSize: 12,
    color: grey,
    marginBottom: 12,
  }
});
 
export default News;