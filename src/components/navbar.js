import "bootstrap/dist/css/bootstrap.min.css";
import "../style/navbar.css";

function navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#FD913C" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{ fontWeight: 999, fontSize: 24 }}
          >
            MSdesigns
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="/">
                  Sell
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <i className="bi bi-cart4" style={{ fontSize: "1.5rem" }}></i>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 custom-placeholder"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ backgroundColor: "white" }}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ backgroundColor: "teal", color: "white" }}
              >
                <text>Search</text>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default navbar;
