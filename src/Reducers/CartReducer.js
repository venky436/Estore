

export const cartReducer = (state = {cartItems : []},action) =>{
    
    switch(action.type){
        
        case 'ADD TO CART':
            return {
                ...state,
                cartItems : [...state.cartItems,action.payload],
                success : true
            }
        default :
        return{
            ...state
        }
    }
   
}