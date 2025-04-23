import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { db } from "../database/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

function ProductInformation() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct(productSnap.data());
        } else {
          console.error("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const allProducts = querySnapshot.docs
          .filter((docSnap) => docSnap.id !== id)
          .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));

        const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
        setSimilarProducts(shuffled.slice(0, 4));
      } catch (error) {
        console.error("Error fetching similar products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [id]);

  const handleAddToCart = () => {
    const cartItem = {
      id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    const singleItem = [
      {
        id,
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity,
      },
    ];

    localStorage.setItem("cart", JSON.stringify(singleItem));
    window.location.href = "/checkout";
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center py-5">
          <h4>Loading product...</h4>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div className="row align-items-center">
          <div className="col-md-6 text-center p-4">
            <img
              src={product.imageUrl}
              className="img-fluid rounded"
              alt={product.title}
              style={{ maxHeight: 500, marginTop: "5%" }}
            />
          </div>

          <div className="col-md-6 p-4">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>

            <div className="d-flex align-items-center mb-3">
              <button className="btn btn-outline-secondary" onClick={decreaseQty}>
                −
              </button>
              <span className="mx-3 fs-5">{quantity}</span>
              <button className="btn btn-outline-secondary" onClick={increaseQty}>
                +
              </button>
            </div>

            {/* Buttons */}
            <div>
              <div className="mb-2">
                <button className="btn btn-success w-25" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
              <div>
                <button className="btn btn-outline-primary w-25" onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="container mt-5">
          <h3 className="mb-4">Similar Products</h3>
          {loading ? (
            <p>Loading similar products...</p>
          ) : (
            <div className="row">
              {similarProducts.map((item) => (
                <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
                  <div className="card h-100 text-center p-2">
                    <img
                      src={item.imageUrl}
                      className="card-img-top mx-auto"
                      alt={item.title}
                      style={{
                        height: "150px",
                        width: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{item.title}</h6>
                      <p className="card-text text-muted" style={{ fontSize: "14px" }}>
                        ${item.price}
                      </p>
                      <a href={`/product/${item.id}`} className="btn btn-sm btn-outline-primary">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductInformation;
