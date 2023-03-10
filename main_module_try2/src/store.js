import { configureStore } from '@reduxjs/toolkit';
import FS1_Reducer from './redux/FoodSite01_redux/FS1_Slice';
import P01_Reducer from './redux/Portfolio01_redux/P01_Slice';
const store = configureStore({
  reducer: {
    FS1: FS1_Reducer,
    P01: P01_Reducer,
  },
});

export default store;
