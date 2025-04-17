import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import '../style/cards.css';
import Bag from "../assets/testbag.jpg";


const bags = [
  {
    id: 1,
    title: "Classic Leather Bag",
    description: "Stylish and durable.",
    img: Bag,
  },
  {
    id: 2,
    title: "Custom Tote",
    description: "Design your own tote.",
    img: Bag,
  },
  {
    id: 3,
    title: "Modern Satchel",
    description: "Perfect for every occasion.",
    img: Bag,
  },
  {
    id: 4,
    title: "Elegant Clutch",
    description: "For your special nights.",
    img: Bag,
  },
  {
    id: 5,
    title: "Convertible Backpack",
    description: "Style meets functionality.",
    img: Bag,
  },
  {
    id: 6,
    title: "Mini Shoulder Bag",
    description: "Chic and lightweight.",
    img: Bag,
  },
];

function Cards() {
  return (
    <div className="row">
      {bags.map((bag) => (
        <div className="col-md-4 mb-4" key={bag.id}>
          <Card className="h-100 shadow-sm card-hover">
            <Card.Img variant="top" src={bag.img} />
            <Card.Body className="text-center">
              <Card.Title>{bag.title}</Card.Title>
              <Card.Text>{bag.description}</Card.Text>
              <Link to="/explore">
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
