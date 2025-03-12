import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '@/redux/feature/counter/counter'
import CartlistReducer from '@/redux/feature/cartlist/cartist'
import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    cartList:CartlistReducer
  },
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;