// import axios from 'axios'

export const cartAction = (id) =>(getState,dispatch)=>{
    dispatch({
        type : 'ADD_TO_CART',
        payload : id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}