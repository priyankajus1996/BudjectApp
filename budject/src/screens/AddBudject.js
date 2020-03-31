import React from 'react';
import { View, StyleSheet,Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = (props) => (
  <Icon name="md-add" color={props.focused ? 'red' : '#000000'} size={25} />
) 
export default class AddBudject extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };
  
  render() {
    return (
      <View style={styles.container} >
       <Image source={require('../../assets/add_bud_img.jpg')} style={styles.budImg} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  flex: 1
  },
  budImg:{
    width: 500,
    height: 400
  }
});