import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})

export default AppRegistry.registerComponent(App)
