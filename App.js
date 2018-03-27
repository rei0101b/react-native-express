import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import Title from './Title'
import Input from './Input'
import List from './List'

class App extends Component {
  state = {
    todos: ['Click to remove', 'Learn react Native', 'Write Code', 'Ship App'],
  }

  onAddToDo = (text) => {
    console.log(text);
    const {todos} = this.state
    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const{todos} = this.state
    console.log(todos, index);
    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  }

  render() {
    const {todos} = this.state
    return(
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter'}
          onSubmitEditing={(text) => this.onAddToDo(text)}
        />
        <List
          list={todos}
          onPressItem={(index) => this.onRemoveTodo(index)}
        />
      </View>
    )
  }
}

export default App
