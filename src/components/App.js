import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { connect } from 'react-redux';

function callback(state){
  return {
    list:state.todos
  }
}

const AddTodoCp = connect(callback)(AddTodo)

const App = () => (
  <div>
    <AddTodoCp />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App