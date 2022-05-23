import { configureStore } from '@reduxjs/toolkit'
import currentPageReducer from './currentPageState'
import productStateReducer from './productState'

export default configureStore({
  reducer: {
    currentPageEntity: currentPageReducer,
    productEntity: productStateReducer,
  },
})
