import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Copyright from "./components/Copyright";
import Pagination from "./components/Pagination";
import ProductDetail from "./components/ProductDetail";
import OrderSummary from "./components/OrderSummary";
import Checkout from "./components/Checkout";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order-summary" component={OrderSummary} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/">
            <>
              <MainContent />
              <Pagination />
              <Copyright />
            </>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
