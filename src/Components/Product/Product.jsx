const Product = ({ product, handleAddToCart }) => {
  const { title, image, description, price } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            className="rounded-xl w-60 h-60"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title.slice(0,20)}..</h2>
          <p>{description.slice(0, 100)}...</p>
          <p>${price}</p>
          <div className="card-actions">
            <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
