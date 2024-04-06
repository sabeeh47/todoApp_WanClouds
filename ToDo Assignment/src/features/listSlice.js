import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
      value: []
    },
    reducers: {
     
      addToDoItem: (state, action) => {
        if(state.value.includes(action.payload))
        {
            alert('Item Already Exists')
        }
        else{
            state.value.push(action.payload) 
        }
      },
      delToDoItem: (state, action) => {
        console.log(action.payload)
        state.value = state.value.filter((item, index) => item !== action.payload)
      }
    }
  })
  
  export const { addToDoItem, delToDoItem } = todoSlice.actions
  
  export default todoSlice.reducer