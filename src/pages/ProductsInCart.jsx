const ProductsInCart = ({ cartItems }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Products in Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-4">
              {item.name} - {item.price} ₽
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsInCart;
