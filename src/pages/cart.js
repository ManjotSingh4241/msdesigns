import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const increaseQty = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const decreaseQty = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-12 mb-4" key={item.id}>
                <div className="card p-3 d-flex flex-row align-items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="img-thumbnail"
                    style={{ height: "100px", width: "auto", marginRight: "20px" }}
                  />
                  <div className="flex-grow-1">
                    <h5>{item.title}</h5>
                    <p className="mb-1">Price: ${item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline-danger ms-3"
                    onClick={() => removeItem(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            <div className="col-md-12">
              <h4>Total: ${total}</h4>
              <button
                className="btn btn-success mt-2"
                onClick={() => (window.location.href = "/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;