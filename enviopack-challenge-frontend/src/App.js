import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.scss'
import Nav from './Components/Nav/Nav';
import { Provider } from "react-redux";
import store from '../src/Store'
import Catalog from '../src/Components/Catalog/Catalog'
import Cart from '../src/Components/Cart/Cart'
import PurchaseStatus from '../src/Components/PurchaseStatus/PurchaseStatus'

const App = ()=> {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav/>

        <div className="App">
          <Switch>
          <Route exact path='/' component={Catalog} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/purchase-status' component={PurchaseStatus} />
           
          </Switch>
        </div>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
