import { Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ITextLinkProps } from '../types/ITextLinkProps';
import { Theme } from '../utils';
 
const TextLink: React.FC<ITextLinkProps> = ({ text, align }) => 
  <Text style={styles.label}>{ text }</Text>

const { regular } = Theme.fonts;
const { grey } = Theme.colors;

const styles = StyleSheet.create({
  label: {
    fontFamily: regular,
    fontSize: 16,
    color: grey,
    textDecorationLine: 'underline'
  },
});
 
export default TextLink;