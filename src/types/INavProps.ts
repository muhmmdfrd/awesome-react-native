import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface INavProps {
    navigation: NativeStackNavigationProp<any, any>,
    route?: NavigatorScreenParams<any>
};