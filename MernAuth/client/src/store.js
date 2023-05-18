<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import FS1_Reducer from "./redux/FoodSite01_redux/FS1_Slice";
import P01_Reducer from "./redux/Portfolio01_redux/P01_Slice";
import Reccomend_Reducer from "./redux/Recommndaetion/Reccomend_Slice";
import B01_Reducer from "./redux/Blog01_redux/Blog01_Slice";
import PW_Reducer from "./redux/PortfolioWeb_redux/PW_slice";
import P02_Reducer from "./redux/Portfolio02_redux/P02_Slice";
import E02_Reducer from "./redux/Ecommerce02_redux/E02_Slice";
import E03_Reducer from "./redux/Ecommerce03_redux/E03_Slice";
import B02_Reducer from "./redux/Blog02_redux/B02_slice";
=======
import { configureStore } from '@reduxjs/toolkit';
import FS1_Reducer from './redux/FoodSite01_redux/FS1_Slice';
import P01_Reducer from './redux/Portfolio01_redux/P01_Slice';
import Reccomend_Reducer from './redux/Recommndaetion/Reccomend_Slice';
import B01_Reducer from './redux/Blog01_redux/Blog01_Slice';
import PW_Reducer from './redux/PortfolioWeb_redux/PW_slice';
import Guide_Slice from './redux/GuideSlice';
>>>>>>> 6e83d79443098c8fc8af724eb9144329036d9b52
const store = configureStore({
  reducer: {
    FS1: FS1_Reducer,
    E02: E02_Reducer,
    E03: E03_Reducer,
    P01: P01_Reducer,
    P02: P02_Reducer,
    PW: PW_Reducer,
<<<<<<< HEAD
    B01: B01_Reducer,
    B02: B02_Reducer,
    Reccomend: Reccomend_Reducer,
=======
    Guide: Guide_Slice,
>>>>>>> 6e83d79443098c8fc8af724eb9144329036d9b52
  },
});

export default store;
