import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BudjectList from '../screens/BudjectList';
import AddBudject from '../screens/AddBudject';
import EditBudject from '../screens/EditBudject'

const BottomTabNavigator = createBottomTabNavigator({
  One: BudjectList,
  Two: AddBudject,
  three: EditBudject
},
{
  tabBarOptions: {
    showLabel: false
  }  
});

export default BottomTabNavigator;