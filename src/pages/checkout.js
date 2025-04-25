import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill out all fields.");
      return;
    }

    alert(`Order placed!\n\nThank you, ${form.name}.`);
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="mb-4">Checkout</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="row">
            {/* Shipping Info */}
            <div className="col-md-6 mb-4">
              <h4>Shipping Information</h4>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control mb-3"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-control mb-3"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="address"
                placeholder="Full Address"
                className="form-control mb-3"
                rows="4"
                value={form.address}
                onChange={handleChange}
              />
            </div>

            {/* Order Summary */}
            <div className="col-md-6">
              <h4>Order Summary</h4>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex mb-3 border-bottom pb-3 align-items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="img-thumbnail"
                    style={{ height: "80px", width: "auto", marginRight: "15px" }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.title}</h6>
                    <div className="text-muted">
                      Qty: {item.quantity} × ${item.price}
                    </div>
                  </div>
                  <strong>${item.price * item.quantity}</strong>
                </div>
              ))}
              <div className="d-flex justify-content-between mt-3">
                <strong>Total:</strong>
                <strong>${total}</strong>
              </div>
              <button className="btn btn-success mt-4 w-100" onClick={handleOrder}>
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;