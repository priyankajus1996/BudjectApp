import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
      <View style={styles.container}>
        <Text>Screen Two</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});