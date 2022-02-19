import React from "react";

import { useDispatch } from "react-redux"

export const CartAction =({data})=>(dispatch,getState)=>{

      dispatch({
          type : 'ADD_TO_CART',
          payload : data

      })
      localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
   
}