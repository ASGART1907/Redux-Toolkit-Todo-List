import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../Slicer/CreateSlice';

export const store = configureStore({
    reducer:{
        Todos:todosSlice
    }
})