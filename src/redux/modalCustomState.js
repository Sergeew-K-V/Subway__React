import { createSlice } from '@reduxjs/toolkit'

export const modalCustomState = createSlice({
  name: 'modalCustomStateName',
  initialState: {
    customProduct: {
      name: '',
      price: 0,
      size: '',
      sizeId: '',
      bread: '',
      breadId: '',
      vegetables: [],
      vegetablesId: [],
      sauces: [],
      saucesId: [],
      fillings: [],
      fillingsId: [],
    },
  },
  reducers: {},
})

export const {} = modalCustomState.actions

export default modalCustomState.reducer
