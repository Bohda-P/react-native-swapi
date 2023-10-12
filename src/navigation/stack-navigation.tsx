import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Namespace
import { NavigatorRoutes } from './navigation.namespace';
// Screens
import { Details, Listing } from '../modules';

export type RootStackParamList = {
  [NavigatorRoutes.LISTING]: undefined;
  [NavigatorRoutes.DETAILS]: { id: number };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackNavigation: React.FC = () => {
  return (
    <Navigator>
      <Screen name={NavigatorRoutes.LISTING} component={Listing} options={{ title: 'Listing' }} />
      <Screen name={NavigatorRoutes.DETAILS} component={Details} options={{ title: 'Details' }} />
    </Navigator>
  );
};

export default StackNavigation;
