import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

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
        <LinearGradient colors={['#ff66cc', '#ffccff', '#66ccff']} >
        <LinearGradient colors={['#003366', '#0066ff', '#003366']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Add Budject
  </Text>
        </LinearGradient>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  budImg: {
    width: 500,
    height: 400
  },
  linearGradient: {
    borderRadius: 5,
    margin: 85,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});