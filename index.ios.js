import React, { Component } from 'react';
import {
  ScrollView,
  View,
  AppRegistry,
  Text
} from 'react-native';
import {
  Header,
  Card,
  CardSection,
} from './src/components/common';
import {
  RowActions2,
  RowActions1,
  SwipeableCard,
} from './src/components/interactable';
import BasicExample from './src/components/lottie/example';



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
          <BasicExample/>
          <Card cardName="Row iOS">
            <CardSection>
              <RowActions2/>
            </CardSection>
          </Card>
          <Card cardName="Row Android">
            <CardSection>
              <RowActions1/>
            </CardSection>
          </Card>
          <Card cardName="Swipeable cards">
            <CardSection>
              <SwipeableCard/>
            </CardSection>
          </Card>
        </ScrollView>
      </View>
    )
  }
}

AppRegistry.registerComponent('tryingLibraries', () => tryingLibraries);

