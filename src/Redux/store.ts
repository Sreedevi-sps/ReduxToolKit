import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosSlice from './todosSlice';
import userSlice from './userSlice';
import counterSlice from './counterSlice';

const rootReducer = combineReducers({
  todos: todosSlice,
  users: userSlice,
  count: counterSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
