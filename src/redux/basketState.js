import { createSlice } from '@reduxjs/toolkit'

export const basketState = createSlice({
  name: 'basketStateName',
  initialState: {
    productsOfBasket: [],
  },
  reducers: {
    addProductToBasket(state, action) {
      state.productsOfBasket.push(action.payload)
      console.log('basket state', state.productsOfBasket)
      console.log(action.type)
    },
  },
})

export const { addProductToBasket, initBasket } = basketState.actions

export default basketState.reducer
