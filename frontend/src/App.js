import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Copyright from "./components/Copyright";
import Pagination from "./components/Pagination";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/">
            <>
              <MainContent />
              <Pagination />
            </>
          </Route>
        </Switch>
      </main>
      <footer className="page-footer text-center font-small mt-4 wow fadeIn">
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
