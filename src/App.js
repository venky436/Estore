import './App.css';
import React,{useEffect} from 'react';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { ProductScreen } from './screens/ProductScreen';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartScreen } from './screens/CartScreen';
import { Counter } from './screens/Counter';
// import { Provider } from 'react';
// import { Provider } from 'react-redux';
// import { Store } from './screens/ProductScreen';




// start here///////////////////////////////////////////////////////////////////////////

export let Store = React.createContext();







function App() {


  useEffect(()=>{

  },)
  return (
    <>
      {/* <Store.Provider value={cartItem}> */}
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/view/:id" component={ProductScreen} />
            <Route exact path="/cart/item" component={CartScreen} />
            <Route path="/count" component={Counter} />
          </Switch>
        </BrowserRouter>
      {/* </Store.Provider> */}
    </>
  );
}



export default App;



