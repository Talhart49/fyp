import { configureStore } from '@reduxjs/toolkit';
import FS1_Reducer from './redux/FoodSite01_redux/FS1_Slice';

const store = configureStore({
  reducer: {
    FS1: FS1_Reducer,
  },
});

export default store;
