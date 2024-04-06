import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/listSlice';
export default configureStore({
  reducer: {
    todo: todoReducer
  }
})