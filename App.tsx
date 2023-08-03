import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider} from 'react-redux'
import store from './src/Redux/store'
import TodoScreen from './src/Screens/ToDo'
import UserScreen from './src/Screens/UserScreen'
import Counter from './src/Screens/Counter'

const App = () => {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <UserScreen />
      {/* <TodoScreen /> */}
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})