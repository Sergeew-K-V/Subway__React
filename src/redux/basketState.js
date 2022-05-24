import { createSlice } from '@reduxjs/toolkit'

export const basketState = createSlice({
  name: 'basketStateName',
  initialState: {
    productsOfBasket: [],
  },
  reducers: {
    // initBasket(state, action) {

    //   console.log(action.type)
    // },
    addProductToBasket(state, action) {
      state.productsOfBasket.push(action.payload)
      debugger
      console.log('basket state', state.productsOfBasket)
      console.log(action.type)
    },
  },
})

export const { addProductToBasket, initBasket } = basketState.actions

export default basketState.reducer
