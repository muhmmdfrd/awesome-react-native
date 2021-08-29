import { Text } from 'native-base';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconChat, IconChatActive, IconDoctor, IconDoctorActive, IconMap, IconMapActive } from '../assets';
import { Theme } from '../utils';

export interface TabItemProps {
  title: string,
  isActive: boolean,
  onPress: any,
  onLongPress: any
}
 
const TabItem: React.FC<TabItemProps> = ({ title, isActive, onPress, onLongPress }) => {

  const getIcon = (title: string): any => {
    switch (title) {
      case 'Doctor':
        return isActive ? <IconDoctorActive /> : <IconDoctor />;
      case 'Messages':
        return isActive ? <IconChatActive /> : <IconChat />;
      case 'Hospitals':
        return isActive ? <IconMapActive /> : <IconMap />;
      default:
        return;
    }     
  }

  return(
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {getIcon(title)}
      <Text style={styles.text(isActive)}>{ title }</Text>
    </TouchableOpacity>
  );
}

const { tabText, tabTextActive } = Theme.colors;
const { semiBold } = Theme.fonts;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: (isActive: boolean): any => ({
    color: isActive ? tabTextActive : tabText,
    fontSize: 10,
    marginTop: 4,
    fontFamily: semiBold
  })
})
 
export default TabItem;