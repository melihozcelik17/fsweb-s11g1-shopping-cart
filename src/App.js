
import { Route } from "react-router-dom";



// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [Products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item])
  }


  return (
    <div className="App">

      <Navigation />


      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>

    </div>
  );
}

export default App;
