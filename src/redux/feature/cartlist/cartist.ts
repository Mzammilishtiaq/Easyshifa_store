import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartListState {
  items: any[] // replace any with your item type
}

const initialState: CartListState = {
  items: [],
}

export const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => { // replace any with your item type
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((_, index) => index !== action.payload)
    },
    updateItem: (state, action: PayloadAction<{index: number, item: any}>) => { // replace any with your item type
      state.items[action.payload.index] = action.payload.item
    },
  },
})

export const { addItem, removeItem, updateItem } = cartListSlice.actions

export default cartListSlice.reducer