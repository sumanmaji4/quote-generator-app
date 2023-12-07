import { createSlice } from '@reduxjs/toolkit'

const localValue = localStorage.getItem('BOOKMARKS')

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    items: localValue != null ? JSON.parse(localValue) : [],
  },
  reducers: {
    addQuote: (state, action) => {
      const exist = state.items.find((item) => item._id === action.payload._id)
      if (!exist) state.items.push(action.payload)

      localStorage.setItem(
        'BOOKMARKS',
        JSON.stringify(state.items.map((item) => item))
      )
    },
    removeQuote: (state, action) => {
      state.items = state.items.filter((item) => {
        // console.log(item._id, action.payload)
        return item._id !== action.payload
      })
      localStorage.setItem(
        'BOOKMARKS',
        JSON.stringify(state.items.map((item) => item))
      )
    },
  },
})

export default bookmarkSlice

export const bookmarkActions = bookmarkSlice.actions
