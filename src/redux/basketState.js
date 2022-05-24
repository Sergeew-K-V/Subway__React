import { createSlice } from '@reduxjs/toolkit'

export const basketState = createSlice({
  name: 'basketStateName',
  initialState: {
    productsOfBasket: [],
  },
  reducers: {
    initBasket(state, action) {
      return state.productsOfBasket
    },
    addProductToBasket(state, action) {
      state.productsOfBasket.push(action.payload)
      debugger
      console.log('basket state', state.productsOfBasket)
    },
  },
})

export const { addProductToBasket, initBasket } = basketState.actions

export default basketState.reducer
