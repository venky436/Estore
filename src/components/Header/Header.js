import React,{useState,useEffect} from 'react';
import '../Header/Header.css'
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import { cart_count } from '../../screens/CartScreen';


export const Header = () => {



 let [menu,setMenu] = useState(false)
 let [login, setLogin] = useState(false);
 let [signup, setSignup] = useState(false);
 let [cart, setCart] = useState(false);

//  let [ccount,setCount] = useState(cart_count)


//  for Login

let [username,setUsername] = useState('')
let [password,setPassword] = useState('')

// SignUp

let [s_username,setS_username] = useState('')
let [s_password,setS_password] = useState('')
let [s_cpassword, setS_cpassword] = useState("");
let [email,setEmail] = useState('')





 document.addEventListener("click", (e) => {
   //  console.log(e.target)
   if (
     e.target.matches("html") ||
     e.target.closest(".body_sub_main") ||
     e.target.closest(".product_main") ||
     e.target.closest(".p_sub") ||
     e.target.closest(".s-r")
   ) {
     setMenu(false);
     setLogin(false);
     setSignup(false);
     setCart(false);
   }
 });



 document.addEventListener('mouseover',(e)=> {
  //  console.log(e.target)
   if (
     e.target.matches("html") ||
     e.target.closest(".body_sub_main") ||
     e.target.closest(".product_main") ||
     e.target.closest(".p_sub") ||
     e.target.closest(".s-r")
   ) {
     setLogin(false);
     setSignup(false);
     setCart(false);
   }
 })
// cart

let cartHandler = ()=>{
   setLogin(false);
   setSignup(false);
   setMenu(false)
   setTimeout(() => {
     
     setCart(!cart)
   }, 200);
}

//  menubar
 let menuHandler = (e)=>{
    setLogin(false)
    setSignup(false)
     setCart(false);

    setTimeout(()=>{
      setMenu(!menu)
    },300)
 }
// login
 let loginHandler=()=>{
   setMenu(false)
   setSignup(false)
     setCart(false);

   setTimeout(()=>{
     setLogin(!login)
   },300)
 }
// sigup
 let signupHandler = ()=>{
   setLogin(false)
   setMenu(false)
     setCart(false);

   setTimeout(() => {
     
     setSignup(!signup)
   }, 200);
 }

//  Login Submit

let loginSubmit = (e)=>{
  e.preventDefault()
  if(username === '' || password === ''){
    alert('please fill the details')
  }else{
   console.log({ username: username, password: password });
   setLogin(false);
  }
  
}

let signupSubmit = (e) => {
  e.preventDefault();
 
  if((s_password !== s_cpassword) || (s_username  === '')){
    alert('password not match ')
  }else{
    setSignup(false)
    console.log({username:s_username,password:s_password,email:email})
  }
};
  return (
    <>
      <div className="main">
        <div className="sub_main ">
          <div className="left">
            <div className="left_content">
              <div className="menu_icon">
                <span className="material-icons" onClick={menuHandler}>
                  menu
                </span>
              </div>
              <div className="logo">
                <Link to="/">
                  <h2>
                    <span style={{ color: "red" }}>E</span>store
                  </h2>
                </Link>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right_content">
              <Link to="/cart/item">
                <li onMouseOver={cartHandler}>
                  <i className="fas fa-shopping-cart"></i> Cart ({cart_count})
                </li>
              </Link>
              {/* <li onMouseOver={loginHandler}>
                <i className="fas fa-sign-in-alt"></i> Login
              </li>
              <li onMouseOver={signupHandler}>
                {" "}
                <i className="fas fa-user-plus"></i> Signup
              </li> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          menu
            ? "content active bg-primary d-flex align-items-center justify-content-center"
            : "content"
        }
      >
        <h1 className="d-block text-center text-white">
          You can add your Navlinks Here
        </h1>
      </div>

      {/* Login  */}

      <div
        className={
          login ? "login_page active bg-primary text-white " : "login_page"
        }
      >
        <h2 className="my-2">Login</h2>
        <form onSubmit={loginSubmit}>
          <input
            type="text"
            placeholder="enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className="bg-success" value="Login" />
        </form>
      </div>

      {/* signup */}

      <div
        className={
          signup ? "signup_page active bg-primary text-white t" : "signup_page"
        }
      >
        <h2 className="d-block my-2">Signup</h2>
        <form onSubmit={signupSubmit}>
          <input
            type="text"
            placeholder="enter username"
            value={s_username}
            onChange={(e) => setS_username(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter password"
            value={s_password}
            onChange={(e) => setS_password(e.target.value)}
          />
          <input
            type="text"
            placeholder="Confirm password"
            value={s_cpassword}
            onChange={(e) => setS_cpassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input type="submit" className="bg-success" value="Signup" />
        </form>
      </div>

      {/* Cart */}
      <div className={cart ? "cart active bg-light" : "cart"}></div>
    </>
  );
};
