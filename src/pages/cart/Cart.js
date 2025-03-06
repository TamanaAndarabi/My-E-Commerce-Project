import React, { useContext } from "react";
import { ShopContext } from "../../textContext/ShopContext";
import { PRODUCTS } from "../../data/PRODUCTS";

const Cart = () => {
  const { cartItem, removeFromCart } = useContext(ShopContext);

  console.log("Cart Items:", cartItem);

  // فقط محصولات موجود در cartItem را فیلتر کن
  const cartProducts = PRODUCTS.filter((item) =>
    cartItem.some((i) => i.id === item.id && i.count > 0)
  );
  console.log("cartProducts ---> ", cartProducts);
  //   const cartProducts = PRODUCTS.filter((product) => {
  //     const itemInCart = cartItem.find((item) => item.id === product.id);
  //     return itemInCart && itemInCart.count > 0;
  //   });
  return (
    <React.Fragment>
      <div className="App">
        <h1 className="heading"> Shopping Products List </h1>

        {cartProducts.length === 0 ? (
          <h2>Your shopping cart is empty</h2>
        ) : (
          <div className="row">
            {cartProducts.map((item) => {
              const itemInCart = cartItem.find((i) => i.id === item.id);
              console.log("itemInCart:", itemInCart);

              return (
                <div
                  key={item.id}
                  className="col-3"
                  style={{ marginTop: "100px" }}
                >
                <div className="column">
                  <img
                    src={item.productImage}
                    alt={item.name}
                    style={{ width: "80%", height: "300px" }}
                  />
                  <h3>{item.name}</h3>
                  <p>Price: {item.price} $</p>
                </div>
                  <button
                    className="btn btn-style"
                    onClick={() => removeFromCart(item.id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
