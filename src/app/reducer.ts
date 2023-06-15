import { combineReducers } from '@reduxjs/toolkit';
import { reducer as apiReducer, reducerPath as apiPath } from '../services/api/index';

export const reducers = {
    [apiPath]: apiReducer,
};

export const reducer = combineReducers(reducers);
