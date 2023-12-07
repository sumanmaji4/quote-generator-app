import { configureStore } from '@reduxjs/toolkit'
import bookmarkSlice from './bookmark-slice'

const store = configureStore({
  reducer: { bookmark: bookmarkSlice.reducer },
  devTools: true,
})

export default store
