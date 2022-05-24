import { configureStore } from '@reduxjs/toolkit'
import productStateReducer from './productState'
import basketStateReducer from './basketState'
import modalCustomStateReducer from './modalCustomState'

export default configureStore({
  reducer: {
    productEntity: productStateReducer,
    basketEntity: basketStateReducer,
    modalCustomEntity: modalCustomStateReducer,
  },
})
