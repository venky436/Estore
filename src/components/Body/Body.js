import React,{useState,useEffect} from 'react'
import '../Body/Body.css'
import { Carousel } from 'react-bootstrap'
import proshop from '../../products'

import { products } from '../../products'
import {Rating} from '../Rating'


export const Body = ({history}) => {

  let [category,setCategory]  = useState('')
  let [ppp,setPpp] = useState()



  let [search,setSearch] = useState('')


  


  let categoryHandler = (e)=>{
     setCategory(v=>setCategory(e.target.value))
    
  }

  let viewHandler = (id)=>{
     history.push(`view/${id}`)
    
  }

  let searchSubmit = (e)=>{
    e.preventDefault()
    
  }

  useEffect(()=>{

   

 if(!search){
    if(category !== ''){
       let cat = products.filter((ele)=>ele.category == category)
       setPpp(cat)
    }else{
      setPpp(products);
    }
  }else{
    let ser_items = products.filter(ele=>ele.title.toLowerCase().match(search.toLowerCase()))

    setPpp(ser_items)
    
  }},[category,search])
  return (
    <>
      <div className="body_main">
        <div className="body_sub_main">
          <Carousel className="car bg-light" variant="dark">
            <Carousel.Item>
              <img className="im" src={proshop[0].image} alt="First slide" />
              <Carousel.Caption>
                <h3>{proshop[0].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="im" src={proshop[1].image} alt="First slide" />
              <Carousel.Caption>
                <h3>{proshop[1].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="im" src={proshop[4].image} alt="First slide" />
              <Carousel.Caption>
                <h3>{proshop[2].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* search */}

      <div className="row s-r">
        <div className="col-md-5 col-sm-5 col-5">
          <form onSubmit={searchSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search by product name"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button type="submit" value="Search" className="btn btn-primary b">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* search end */}


      <div className="product_main">
        <div className="product_sub">
          <div className="title">
            <h3>Latest Products</h3>
          </div>

          <div className="sel">
            <select value={category} onChange={categoryHandler}>
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
        </div>

        {/* products Display */}


        <div className="p_sub row ">
          {ppp &&
            ppp.map((product, index) => (
              <div
                className="p_one i col-md-3 col-5 col-sm-5 col-lg-3 "
                key={index}
              >
                <div className="card ">
                  <img src={product.image} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 25)}
                    </h5>{" "}
                    <hr />
                    <div className="price">
                      <h5 className="card-title">Price : ${product.price}</h5>{" "}
                      &nbsp; &nbsp;
                      <h5 className="d-flex">
                        <span id="discount">
                          {product.price > 100
                            ? `${Math.trunc(Math.random() * 6 + 40)}%`
                            : `${Math.trunc(Math.random() * 8 + 20)}`}{" "}
                          off
                        </span>
                        <strike className="price_s">
                          $
                          {(product.price > 100
                            ? product.price + 150
                            : product.price + 30
                          ).toFixed(2)}
                        </strike>
                      </h5>
                    </div>
                    <Rating rating={product.rating.rate} />
                    <hr />
                    <div className="bb-g">
                      {" "}
                      <a className="btn bb">cart</a>
                      <a
                        className="btn bb"
                        onClick={() => viewHandler(product.id)}
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* style */}

        <div className="container-fluid">
          <div className="row rr bg-warning">
            <div className="col-md-4 col-sm-5 col-5">
              <img src={proshop[2].image} id="im" />
            </div>
            <div className="col-md-6 col-sm-5 col-5">
              <h2 id="matter">
                Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55
                is II · Canon EOS 200D II 24.1MP Digital SLR Camera
              </h2>

              <button id="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
