import React,{useState,useEffect} from 'react'
import '../components/Body/Body.css'
import { products } from '../products'
import { Link } from 'react-router-dom'
import {Rating} from '../components/Rating'
export const ProductScreen = ({match,history}) => {

  let [qty,setQty] = useState()

    let [p,setP] = useState()

    let Id = match.params.id


    let cartHandler = (id)=>{
       if(qty !== null){
         history.push(`/cart/item/${id}?qty=${qty}`)
       }
    }

    useEffect(()=>{ 
       
        if(Id == ''){
            history.push('/')
        }else{
            let item = products.find((ele)=>ele.id == Id)
            setP(item)
        }

       
    },[Id])
    


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
                  Stock : <span style={{color:'green'}}>{p && p.rating.count}  Items Left</span>
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
                        [...Array(p.rating.count).keys()].map((e,index) => {
                          return <option key={index} value={e + 1}>{e + 1}</option>;
                        })}
                    </select>
                  </div>

                  <button id="bb" onClick={()=>cartHandler(p && p.id)} >Add To cart</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
