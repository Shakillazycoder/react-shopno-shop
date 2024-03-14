import { useState } from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Shopingcard from "./Components/Shopingcard/Shopingcard";

function App() {
  const [carts, setCarts] = useState([])

const handleAddToCart = (product) => {
   const isExists = carts.find(p => p.id === product.id);
   if(!isExists) {
    setCarts([...carts, product]);
   } else{
    alert('Product already exists');
   }
}

 const handleRemoveItem = (id) => {
   setCarts(carts.filter(p => p.id !== id));
 }

  return (
    <>
      <div className="container mx-auto px-4">
        <Header></Header>
        <div className="flex max-w-7xl justify-around">
          <Products handleAddToCart={handleAddToCart}></Products>
          <Shopingcard handleRemoveItem={handleRemoveItem} carts={carts}></Shopingcard>
        </div>
      </div>
    </>
  );
}

export default App;
