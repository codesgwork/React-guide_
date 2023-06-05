import { configureStore } from '@reduxjs/toolkit';

import { counterSlice } from './Counter';
import { authSlice } from './Auth';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
export default store;
