import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = ({handleAddToCart}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/fakeData.json')
       .then(res => res.json())
       .then(data => setProducts(data))
    }, [])


    return (
        <div className="w-2/3">
            <h1 className="text-3xl font-bold">Products: {products.length}</h1>
             <div className="grid grid-cols-2 gap-5">
             {
                 products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
             }
             </div>
        </div>
    );
};

export default Products;