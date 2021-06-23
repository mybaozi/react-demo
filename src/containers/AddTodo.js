import React from 'react'
import { connect } from 'react-redux'
import { addTodo,delTodo,asyncFn as acAsyncFn } from '../actions'
import addIcon from 'public/svg/add.svg'

const AddTodo = (props) => {
  let input
  const {dispatch } = props;
  console.log(props)
  function asyncFn(){
    dispatch(acAsyncFn())
  }
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
        <button onClick={()=>{
          dispatch(delTodo())
        }}>
          Del Todo
        </button>
        <button onClick={asyncFn}>async</button>
        {addIcon}
      </form>
    </div>
  )
}

export default connect()(AddTodo)