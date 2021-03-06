import React,{useState,useEffect,useContext} from 'react'
import { ListGroup } from 'react-bootstrap'
import { products } from '../products'
import { useSelector,useDispatch } from 'react-redux'

import '../Css/CartScreen.css'

import { Store } from '../App'
import { cartItem } from './ProductScreen'
import { Link } from 'react-router-dom'


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
   
    localStorage.removeItem('cartItems')
    cartItem.length = 0
     history.push("/");
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
      {items.length > 0 ? (
        <div className="container" style={{ marginTop: "19rem" }}>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-8 col-12 col-sm-12">
              <ListGroup>
                <ListGroup.Item>
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-1 col-1 col-sm-1">&nbsp;</div>
                    <div className="col-md-3 col-3 col-sm-3 ">
                      <h3>Name</h3>
                    </div>
                    <div className="col-md-1 col-1 col-sm-1">
                      <h3>Quantity</h3>
                    </div>
                    <div className="col-md-1 col-1 col-sm-1">
                      <h1>&nbsp;</h1>
                    </div>

                    <div className="col-md-2 col-2 col-sm-2">
                      <h3>Price</h3>
                    </div>
                    <div className="col-md-2 col-2 col-sm-2">
                      <h3>Total</h3>
                    </div>
                    <div className="col-md-2 col-2 col-sm-2">
                      <h3>Remove</h3>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>

              {items &&
                items.map((e, index) => (
                  <ListGroup key={index}>
                    <ListGroup.Item>
                      <div className="row ">
                        <div className="col-md-1 col-1 col-sm-1 d-flex align-items-center justify-content-center">
                          <img src={e.image} className="d-block w-100" />
                        </div>
                        <div className="col-md-3 col-3 colsm-3 d-flex align-items-center justify-content-center">
                          <h3>{e.title}</h3>
                        </div>
                        <div className="col-md-1 col-1 col-sm-1 d-flex align-items-center justify-content-center">
                          <h3>{e.qty}</h3>
                        </div>
                        <div className="col-md-1 col-1 col-sm-1">
                          <h1>*</h1>
                        </div>

                        <div className="col-md-2 col-2 col-sm-2">
                          <h3>${e.price}</h3>
                        </div>
                        <div className="col-md-2 col-2 col-sm-2">
                          <h3>${(e.qty * e.price).toFixed(2)}</h3>
                        </div>
                        <div className="col-md-2 col-2 col-sm-2">
                          <button id="btn" onClick={() => removeHandler(e)}>
                            <i className="fas fa-trash" title="Remove"></i>
                          </button>
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                ))}
            </div>
            <div className="col-12 col-md-3 col-sm-12 py-3">
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
                  <button
                    className="btn btn-primary d-block w-100 fs-3"
                    disabled={items.length > 0 ? false : true}
                    onClick={placeHandler}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 id="empty">
          Your cart Is Empty{" "}
          <Link to="/">
            <span id="shop">Shop Now</span>
          </Link>
        </h1>
      )}
    </div>
  );
}
