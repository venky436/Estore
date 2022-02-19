import './App.css';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { ProductScreen } from './screens/ProductScreen';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartScreen } from './screens/CartScreen';





// start here///////////////////////////////////////////////////////////////////////////

function App(hello) {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/view/:id" component={ProductScreen} />
          <Route exact path="/cart/item/:id?" component={CartScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}



export default App;

