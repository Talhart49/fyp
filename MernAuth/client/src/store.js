import { configureStore } from '@reduxjs/toolkit';
import FS1_Reducer from './redux/FoodSite01_redux/FS1_Slice';
import P01_Reducer from './redux/Portfolio01_redux/P01_Slice';
import Reccomend_Reducer from './redux/Recommndaetion/Reccomend_Slice';
import B01_Reducer from './redux/Blog01_redux/Blog01_Slice';
import PW_Reducer from './redux/PortfolioWeb_redux/PW_slice';
import Guide_Slice from './redux/GuideSlice';
const store = configureStore({
  reducer: {
    FS1: FS1_Reducer,
    P01: P01_Reducer,
    Reccomend: Reccomend_Reducer,
    B01: B01_Reducer,
    PW: PW_Reducer,
    Guide: Guide_Slice,
  },
});

export default store;
