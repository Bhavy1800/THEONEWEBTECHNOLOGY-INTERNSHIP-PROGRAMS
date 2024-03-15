// import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg Nav_main container-fluid">
        <div className="container gx-0">
          <a className="navbar-brand" href="#">
            <h1>FoodZing</h1>
            {/* <img src="{logo}" alt="" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Facility
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="icons">
                <i className="fa-solid fa-magnifying-glass"></i>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                  width="26"
                  height="26"
                  className="img-small mx-3"
                />
              </div>
              <button className="btn1 ms-lg-2" type="button">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
