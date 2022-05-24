import { createSlice } from '@reduxjs/toolkit'

export const basketState = createSlice({
  name: 'basketStateName',
  initialState: {
    productsOfBasket: [],
  },
  reducers: {
    addProductToBasket(state, action) {
      const existingProduct = state.productsOfBasket.find((el) => el._id === action.payload._id)
      if (existingProduct) {
        existingProduct.quantity = action.payload.quantity
      } else {
        state.productsOfBasket.push(action.payload)
      }
      console.log('basket state', state.productsOfBasket)
      console.log(action.type)
    },
  },
})

export const { addProductToBasket, initBasket } = basketState.actions

export default basketState.reducer
