const Shopingcard = ({ carts, handleRemoveItem }) => {
    
    const prices =carts.reduce((p, c) => p + c.price, 0)
    
  return (
      <div className="card w-96 h-1/2 bg-base-200 shadow-xl">
       <h2 className="text-xl text-black text-center font-bold pt-3">Add to Carts: {carts.length} </h2>
        <div className="card-body">
        <div>
            <h2 className="text-3xl font-bold">Item list: </h2>
            <div className="flex justify-between text-xl font-bold pt-3">
                <h2>Name</h2>
                <h2>Price</h2>
                <h2>Delete</h2>
            </div>
                {carts.map((cart,index) => 
                    <div key={index} className="flex justify-between items-center space-x-5 p-2">
                        <h2>{index+1}</h2>
                        <h2>{cart.title.slice(0,15)}</h2>
                        <h2>{cart.price}</h2>
                        <button onClick={() => handleRemoveItem(cart.id)} className=" border-2 bg-white border-red-500 p-2 outline-none rounded-2xl text-lg">Remove</button>
                    </div>
                )}
        </div>
        <div className="text-3xl font-bold">Price: {parseFloat(prices).toFixed(2)} </div>
        </div>
      </div>
  );
};

export default Shopingcard;
