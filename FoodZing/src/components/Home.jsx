import heroimg from "../assets/foodzing-home.png";
const Home = () => {
  return (
    <>
      <div className="container-fluid Hero_main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero_col1 ">
                <h1>The taste of tradition, with a modern twist</h1>
                <p className="py-3 hero_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, officia maxime laborum, voluptatibus asperiores
                  deleniti rem accusantium magni repellendus perspiciatis
                  ducimus facilis sit vitae illo?
                </p>
                <div className="hero-btns">
                  <button className="btn1 fs-5 btn0">Get Started</button>
                  <button className="btn1 mx-lg-4 fs-5 btn00">
                    See Our Menu
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero_col2">
                <img src={heroimg} alt="heroimg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
