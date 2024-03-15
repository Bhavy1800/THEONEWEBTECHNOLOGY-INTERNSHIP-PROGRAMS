import img1 from "../assets/delivery1-VE-uoCTq.png";
import img2 from "../assets/delivery2-1vMH2tRW.png";
import img3 from "../assets/delivery3-gpGc9IdM.png";

const Delivery = () => {
  return (
    <>
      <div className="conatainer-fluid text-center py-5">
        <h1 className="main_heading">
          Why <span>FoodZing?</span>
        </h1>
        <div className="container py-4">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="delivery_col1">
                <img src={img1} alt="" />
                <h2>Easy To Order</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="delivery_col1">
                <img src={img2} alt="" />
                <h2>Fastest Delivery</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="delivery_col1">
                <img src={img3} alt="" />
                <h2>Best Quality </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
