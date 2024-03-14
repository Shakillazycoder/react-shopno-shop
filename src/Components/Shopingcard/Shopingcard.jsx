const Shopingcard = ({ carts }) => {
    
    const prices =carts.reduce((p, c) => p + c.price, 0)
    
  return (
      <div className="card w-96 h-1/2 bg-base-100 shadow-xl">
       <h2 className="text-xl text-black text-center font-bold">Add to Carts: {carts.length} </h2>
        <div className="card-body items-center">
        <div>
            <h2 className="text-3xl font-bold">Item list: </h2>
            <ul className="list-disc space-y-2 pt-2">
                {carts.map((cart) => (
                    <li key={cart.id}>{cart.title} <img className="h-10 w-10" src={cart.image} alt="" /></li>
                    ))}
            </ul>
        </div>
        <div className="text-3xl font-bold">Price: {parseFloat(prices).toFixed(2)} </div>
        </div>
      </div>
  );
};

export default Shopingcard;
