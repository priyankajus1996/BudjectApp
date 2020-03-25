import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BudjectList from '../screens/ScreenOne';
import AddBudject from '../screens/ScreenTwo';

const BottomTabNavigator = createBottomTabNavigator({
  One: BudjectList,
  Two: AddBudject
});

export default BottomTabNavigator;