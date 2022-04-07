import { createStore, applyMiddleware,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

// Reducers
import {cartReducer} from './Reducers/cartReducer'

// LocalStorage

let cartLocal = localStorage.getItem('cartItems') && JSON.parse(localStorage.getItem('cartItems'))

let reducer = combineReducers({
   cart : cartReducer,
})

let mid = [thunk]

let initial = {
   cart : cartLocal
}

export let store = createStore(reducer,initial,composeWithDevTools(applyMiddleware(mid[0])))