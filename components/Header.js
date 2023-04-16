import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.displayText}> Debugging Is Not So Easy</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  displayText:{
    backgroundColor: 'yellow',
    color: 'red',
    textAlign: 'center',
    fontSize: 30
  }
})