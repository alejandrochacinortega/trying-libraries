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
import Animation from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
  }
  
  render() {
    return (
      <Animation
        ref={animation => { this.animation = animation; }}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('./animations/LineAnimation.json')}
      />
    );
  }
}