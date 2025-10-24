function Card({
  name = "Product Name",
  rating = 0,
  price = "$0.00",
  product = null,
  prev_price = "",
  discount = "",
}) {
  return (
    <div className="card">
      <div className="preview">
        <img src={product} alt="" />
      </div>
      <p className="name">
        <span>{name}</span>
      </p>
      <p className="rating">
        <span>{rating}</span>
        <span>⭐</span>
      </p>
      <p className="price">
        <span>{price}</span>
        <span className="old">{prev_price}</span>
        {discount ? <span className="discount">{discount}</span> : null}
      </p>
    </div>
  );
}

export default Card;
