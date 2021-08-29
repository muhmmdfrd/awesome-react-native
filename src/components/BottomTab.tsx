import { Box } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '../utils';
import TabItem from './TabItem';

export interface BottomTabProps {
  state: { routes: any[], index: number },
  descriptors: any,
  navigation: any
}
 
const BottomTab: React.FC<BottomTabProps> = ({ state, descriptors, navigation }) => {
  return(
    <Box style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem 
            key={index} 
            title={label} 
            isActive={isFocused} 
            onLongPress={onLongPress} 
            onPress={onPress} 
          />
        );
      })}
    </Box>
  );
}

const { black } = Theme.colors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 53,
    backgroundColor: black
  }
})
 
export default BottomTab;