import { Box, Column, Divider, Image, Row, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { IlustrationUploadPhoto } from '../assets';
import { Theme } from '../utils';
import SizeBox from './SizeBox';

export interface MessagePreviewProps {
  name: string,
  chat: string,
  isRead?: boolean
  photo?: any
}
 
const MessagePreview: React.FC<MessagePreviewProps> = (
  { 
    name, 
    chat, 
    isRead = false, 
    photo = IlustrationUploadPhoto 
  }) => {
  return (
    <Box style={styles.container}>
      <Row style={styles.row}>  
        <Image 
          source={photo} 
          alt='profile of chat'
          style={styles.image}
        />
        <Column style={styles.col}>
          <Text style={styles.name}>{ name }</Text>
          <Text style={styles.chat(isRead)} numberOfLines={1}>{ chat }</Text>
        </Column>
      </Row>
      <SizeBox height={16} />
      <Divider bg={Theme.colors.lineColor} />
    </Box>
  );
}

const { regular, light, semiBold } = Theme.fonts;
const { black, grey } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  image: {
    width: 46,
    height: 46,
    marginStart: 16,
  },
  row: {
    alignItems: 'center'
  },
  col: {
    marginStart: 12
  },
  name: {
    fontFamily: regular,
    fontSize: 16,
    color: black
  },
  chat: (isRead: boolean): any => ({
    fontFamily: isRead ? light : semiBold,
    fontSize: 12,
    color: isRead ? grey : black,
    maxWidth: 250
  })
})
 
export default MessagePreview;