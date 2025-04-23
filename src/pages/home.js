import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Banner from "../assets/banner.png";
import Cards from "../components/cards";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <img
          src={Banner}
          className="img-fluid"
          alt="MSdesigns AD..."
          style={{ maxHeight: 550, width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Explore Our Handbags</h2>
        <Cards />
      </div>
    </>
  );
}
export default Home;
