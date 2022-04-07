import React,{useState,useEffect,useContext} from 'react'
import { ListGroup } from 'react-bootstrap'
import { products } from '../products'
import { useSelector,useDispatch } from 'react-redux'
// import { CartAction } from '../Actions/CartAction'
import '../Css/CartScreen.css'

import { Store } from '../App'
import { cartItem } from './ProductScreen'


export let cart_count = 0

export const CartScreen = ({match,history,location}) => {

  // let c = useContext(Store);
  let localItems = JSON.parse(localStorage.getItem("cartItems"));
  let [items,setItems] = useState(localItems)
  
  let new_ar = [];
  let removeHandler=(e)=>{
    
    // let ttt = cartItem.map((ele,index)=> ele.title !== e.title ? cartItem.splice(index,1) : ele  )
    
    // setItems(ttt)
  
    for(let i=0; i<cartItem.length;i++){
      
      if(cartItem[i].title == e.title){
         cartItem.splice(i,1)
      }else{
         new_ar.push(cartItem[i])
      }
    }
    
    
    setItems(new_ar)

    localStorage.setItem('cartItems',JSON.stringify(new_ar))
  //  let local = JSON.parse(localStorage.getItem("cartItems"));
  //   setItems(local)

    
  }

  let placeHandler=()=>{
    alert('Your order successfully placed')
    history.push('/')
    localStorage.removeItem('cartItems')
    cartItem.length = 0
  }


  // Total Items
   let count = cartItem.length
   cart_count = count
   
  // Total Price

let price = cartItem && cartItem.reduce((acc,ele)=>acc+(ele.price*ele.qty),0)
  
// shipping Price

 
  
  // let cartItems = [];
   
    useEffect(() => {

    }, [items]);
  return (
    <div>
      <div className="container" style={{ marginTop: "19rem" }}>
        <div className="row">
          <div className="col-md-8">
            <table className="table d-block w-100 h-100">
              {items ? (
                <thead>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Name</td>
                    <td>Quntity</td>
                    <td>Price</td>
                    <td>Total</td>
                    <td>Edit</td>
                  </tr>
                </thead>
              ) : (
                <h1>Your Cart Is Empty</h1>
              )}

              <tbody>
                {items
                  ? items.map((ele, index) => (
                      <tr key={index}>
                        <td>
                          <img src={ele.image} id="image" />
                        </td>
                        <td>{ ele.title}</td>
                        <td>{ ele.qty}</td>
                        <td>${ele.price}</td>
                        <td>${(ele.price * ele.qty).toFixed(2)}</td>
                        <td>
                          <button id="btn" onClick={() => removeHandler(ele)}>
                            <i className="fas fa-trash" title="Remove"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
          <div className="col-3 col-md-3 col-lg-3 py-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  <span>Total Items</span> : <span>({count})</span>
                </h3>
                <hr />
                <h3 className="card-title">
                  <span>Total Price</span> :{" "}
                  <span>$ {price ? price.toFixed(2) : 0}</span>
                </h3>
                <hr />
                <h3 className="card-title">
                  <span>Shipping Price</span> :{" "}
                  <span>$ {price > 100 ? 14 : 0}</span>
                </h3>
                <hr />
                <button className="btn btn-primary d-block w-100 fs-3" onClick={placeHandler}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
