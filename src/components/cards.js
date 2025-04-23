import { useEffect, useState } from "react";
import { db } from "../database/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/cards.css";

function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <Card className="h-100 shadow-sm card-hover">
            {product.imageUrl && (
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.title}
                style={{ objectFit: "cover", maxHeight: 500, marginTop: "5%" }}
                // style={{ maxHeight: 500, marginTop: "5%" }}
              />
            )}
            <Card.Body className="text-center">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>${product.price}</strong>
              </Card.Text>
              <Link to={`/product/${product.id}`}>
                <Button variant="primary">Explore</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
