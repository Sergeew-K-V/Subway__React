import { createSlice } from '@reduxjs/toolkit'

export const basketState = createSlice({
  name: 'basketStateName',
  initialState: {
    productsOfBasket: [],
    price: 0,
  },
  reducers: {
    addProductToBasket(state, action) {
      const existingProduct = state.productsOfBasket.find((el) => el._id === action.payload._id)
      if (existingProduct) {
        state.price -= existingProduct.price * existingProduct.quantity
        existingProduct.quantity = action.payload.quantity
        state.price += action.payload.price * action.payload.quantity
      } else {
        state.productsOfBasket.push(action.payload)
        state.price += action.payload.price * action.payload.quantity
      }
      console.log(action.type)
      console.log('price', state.price)
    },
    deleteProductFromBasket(state, action) {
      const removingItem = state.productsOfBasket.find((el) => el._id === action.payload)
      state.productsOfBasket = state.productsOfBasket.filter((el) => el !== removingItem)
      state.price -= removingItem.price * removingItem.quantity
      console.log(action.type)
    },
  },
})

export const { addProductToBasket, deleteProductFromBasket } = basketState.actions

export default basketState.reducer
