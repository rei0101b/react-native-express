import React, { Component } from 'react'
import { AppRegistry, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Toggle extends Component {

  onPress = (option) => {
    const {onChange} = this.props
    onChange(option)
  }

  renderOption = (option) => {
    const {value} = this.props

    return (
      <TouchableOpacity
        style={[styles.option, option === value && styles.activeOption]}
        onPress={() => this.onPress(option)}
      >
        <Text style={styles.text}>
          {option}
        </Text>
      </TouchableOpacity>
    )
  }


  render() {
    const {label, options} = this.props

    return(
      <View style={styles.container}>
        <Text style={[styles.text, styles.label]}>
          {label}
        </Text>
        <View style={styles.optionsContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  lable: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
})

export default Toggle
