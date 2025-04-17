import React, { useState } from "react";
import Navbar from "../components/navbar";
import Bag from "../assets/testbag.jpg";
import SimilarBag from "../assets/testbag.jpg"; // Add your own images

function ProductInformation() {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Similar products array
  const similarProducts = [
    {
      id: 1,
      name: "Vintage Tote",
      price: "$49.99",
      image: SimilarBag,
    },
    {
      id: 2,
      name: "Mini Crossbody",
      price: "$39.99",
      image: Bag,
    },
    {
      id: 2,
      name: "Mini Crossbody",
      price: "$39.99",
      image: Bag,
    },
    {
      id: 2,
      name: "Mini Crossbody",
      price: "$39.99",
      image: Bag,
    },
    {
      id: 2,
      name: "Mini Crossbody",
      price: "$39.99",
      image: Bag,
    },
    {
      id: 2,
      name: "Mini Crossbody",
      price: "$39.99",
      image: Bag,
    },
    {
      id: 2,
      name: "Mini Crossbody",
      price: "$39.99",
      image: Bag,
    },
    {
      id: 3,
      name: "Custom Backpack",
      price: "$69.99",
      image: SimilarBag,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div className="row align-items-center">
          {/* Left - Image */}
          <div className="col-md-6 text-center p-4">
            <img
              src={Bag}
              className="img-fluid rounded"
              alt="Bag"
              style={{ maxHeight: 500, marginTop: "5%" }}
            />
          </div>

          {/* Right - Product Info */}
          <div className="col-md-6 p-4">
            <h2>Classic Leather Bag</h2>
            <p>
              This elegant and stylish leather bag is designed to be both
              durable and chic. Customize it to your preference and enjoy high
              quality at an affordable price.
            </p>
            <p>
              <strong>Price:</strong> $59.99
            </p>

            {/* Quantity Selector */}
            <div className="d-flex align-items-center mb-3">
              <button
                className="btn btn-outline-secondary"
                onClick={decreaseQty}
              >
                −
              </button>
              <span className="mx-3 fs-5">{quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={increaseQty}
              >
                +
              </button>
            </div>

            <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>

        {/* Similar Products Section */}
        {/* Similar Products Section */}
        <div className="container mt-5">
          <h3 className="mb-4">Similar Products</h3>
          <div className="row">
            {similarProducts.map((product) => (
              <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
                <div className="card h-100 text-center p-2">
                  <img
                    src={product.image}
                    className="card-img-top mx-auto"
                    alt={product.name}
                    style={{
                      height: "150px",
                      width: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p
                      className="card-text text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      {product.price}
                    </p>
                    <button className="btn btn-sm btn-outline-primary">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInformation;
