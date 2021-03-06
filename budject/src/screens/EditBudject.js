import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = (props) => (
  <Icon name="md-brush" color={props.focused ? 'red' : '#000000'} size={25} />
)
export default class EditBudject extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen three</Text>
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