import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from './categoryListReducer';

export const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
})
