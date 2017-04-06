// import React from 'react';
// import { Animated } from 'react-native';
// import Animation from 'lottie-react-native';
//
// export default class BasicExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       progress: new Animated.Value(0),
//     };
//   }
//
//   componentDidMount() {
//     Animated.timing(this.state.progress, {
//       toValue: 1,
//       duration: 8000,
//     }).start();
//   }
//
//   render() {
//     return (
//       <Animation
//         style={{
//           width: 200,
//           height: 200,
//         }}
//         source={require('./animations/LineAnimation.json')}
//         progress={this.state.progress}
//       />
//     );
//   }
// }


import React from 'react';
import { View, } from 'react-native';
import Animation from 'lottie-react-native';
import { Button } from '../common';

export default class BasicExample extends React.Component {
  componentDidMount() {
    console.log(' mounted 2 ', this.animation);
    // this.animation.play();
  }
  
  render() {
    return (
      <View>
        <Animation
          ref={animation => { this.animation = animation; }}
          style={{
          width: 200,
          height: 200,
        }}
          source={require('./animations/LineAnimation.json')}
        />
        <Button onPress={() => this.animation.play()}>
          Start
        </Button>
        <Button onPress={() => this.animation.reset()}>
          Pause
        </Button>
      </View>
    )
  }
}
      