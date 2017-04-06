import React, { Component } from 'react';
import {
  ScrollView,
  View,
  AppRegistry,
  Text
} from 'react-native';
import Header from './src/components/Header';
import { RowActions2 } from './src/components/interactable';



export default class tryingLibraries extends Component {
  constructor (props) {
    super();
  }
  
  componentDidMount() {
    console.log(' mounted ');
  }
  
  render() {
    return (
      <View>
        <Header headerText="Libraries"/>
        <ScrollView>
          <View>
            <RowActions2/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

AppRegistry.registerComponent('tryingLibraries', () => tryingLibraries);

