import { configureStore } from '@reduxjs/toolkit'
import currentPageReducer from './currentPageState'
import productStateReducer from './productState'
import basketStateReducer from './basketState'
import modalCustomStateReducer from './modalCustomState'

export default configureStore({
  reducer: {
    currentPageEntity: currentPageReducer,
    productEntity: productStateReducer,
    basketEntity: basketStateReducer,
    modalEntity: modalCustomStateReducer,
  },
})
