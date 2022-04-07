import React,{useState,useEffect,useMemo,useContext} from 'react'
import '../components/Body/Body.css'
import { cartItems, products } from '../products'
import { Link } from 'react-router-dom'
import {Rating} from '../components/Rating'
import {useDispatch} from 'react-redux'
import { cartAction } from '../Actions/cartAction'
import { Header } from '../components/Header/Header'
// import {context} from '/src/App.js'

// import { cartItems } from '../products'

// import { cartItem } from '../App'



 


export let cartItem = [];
export const ProductScreen = ({match,history}) => {


  let [qty,setQty] = useState()

    let [p,setP] = useState()

    let Id = match.params.id
    
    let dispatch = useDispatch()

    
  
   


    let cartHandler = (id)=>{

      let cart = products.find((ele)=>ele.id === id)
      cart.qty = qty
      let it = cartItem.find((e)=>e.title == cart.title)
      if(it){
           
        return history.push('/cart/item')
      }else{
       
        cartItem.push(cart)
        localStorage.setItem("cartItems", JSON.stringify(cartItem));
      }
    //  console.log(cartItem)
     
     history.push(`/cart/item`)

     
    


    
    }

    useEffect(()=>{ 
       
        if(Id == ''){
            history.push('/')
        }else{
            let item = products.find((ele)=>ele.id == Id)
            setP(item)
        }

    },[Id,cartItem])
    


  return (
    <>
      <div className="container c">
        <div className="row">
          <div className="col-md-3">
            <Link to="/">
              <button id="bb">Back</button>
            </Link>
          </div>
        </div>
        <div className="row rrr">
          <div className="col-md-5 col-sm-5 p-3">
            <img src={p && p.image} id="m" />
          </div>

          <div className="col-md-6 col-sm-5  p-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{p && p.title}</h2>
                <hr />
                <h2>Price : ${p && p.price}</h2>
                <Rating rating={p && p.rating.rate} />
                <hr />
                <h4> Description :</h4>
                <br />
                <h5>{p && p.description}</h5>
                <hr />
                <h4>Category : {p && p.category}</h4>
                <hr />
                <h4>
                  Stock :{" "}
                  <span style={{ color: "green" }}>
                    {p && p.rating.count} Items Left
                  </span>
                </h4>
                <hr />
                <span id="sp">
                  <div>
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      id="select"
                    >
                      {p &&
                        [...Array(p.rating.count).keys()].map((e, index) => {
                          return (
                            <option key={index} value={e}>
                              {e}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <button id="bb" onClick={() => cartHandler(p && p.id)}>
                    Add To cart
                  </button>
                 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
