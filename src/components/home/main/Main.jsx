/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./main.css";
import DiCut from "../main/image/di_cut.jpg";
import General from "../main/image/general.jpg";
import Granite from "../main/image/Granite.jpg";
import Marble from "../main/image/marble.jpg";
import Metal from "../main/image/metal.jpg";
import Carou from "./slider/Carou";

const Main = () => {
  let imageone =
    "https://static.chrono24.com/images/default/illustrations/buyer-rating.svg";
  let imagetwo =
    "https://static.chrono24.com/images/default/illustrations/handshake.svg";
  let imagethree =
    "https://static.chrono24.com/images/default/illustrations/dealer.svg";
  let imagefour =
    "https://static.chrono24.com/images/default/seals/buyer-protection.svg";
  return (
    <>
      <React.Fragment>
        <section className="categories" id="home">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div className="categories_item categories_large_item">
                  <img src={DiCut} alt="" className="img-fluid" />
                  <div className="categories_text">
                    <h1>Diamond Cutting Saw Blade</h1>
                    <p>
                      This product is used to make cutting and grooving on
                      porcelain tiles, wearable ceramic tiles, rustic tiles,
                      glaze floor and wall tiles. It is product are approved for
                      their good sharpness, smooth and flat cutting slots and no
                      chipping. It is used on automatic and manual cutting
                      machines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="categories_item">
                      <img src={Metal} alt="" className="img-fluid" />
                      <div className="categories_text">
                        <h1>Metal-Bond Diamond Wheel</h1>
                        <p>
                          It's approved for is approves for their good
                          sharpness, long working lifetime and stable quality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="categories_item">
                      <img src={General} alt="" className="img-fluid" />
                      <div className="categories_text">
                        <h1>General Purpose Saw Blade</h1>
                        <p>
                          This saw blade is for cutting marble, granite. With
                          sharpness cutting smoothly and steadily.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="categories_item">
                      <img src={Marble} alt="" className="img-fluid" />
                      <div className="categories_text">
                        <h1>Saw Blade for Marble</h1>
                        <p>
                          Suitable for cutting marble slabs of different
                          hardness. Our product has advantages as sharp and
                          high-efficiency cutting, smooth cut surface and very
                          stable cutting performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="categories_item">
                      <img src={Granite} alt="" className="img-fluid" />
                      <div className="categories_text">
                        <h1>Saw Blade for Granite</h1>
                        <p>
                          Suitable for cutting granite slabs of high and medium
                          hardness. Our Product has advantages as sharp and
                          high-efficiency cutting, smooth cut surface and very
                          stable sutting performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="intro">
          <h2>The Leading Marketplace for Diamand Cutting Wheel Since 2007</h2>
          <ul>
            <li>
              <img src={imageone} alt width="90" height="90" />
              <h3 className="m-b-2">4.8 out of 5 stars</h3>
              <p>from 30,000 reviews Sri Lanka</p>
            </li>
            <li>
              <img src={imagetwo} alt width="90" height="90" />
              <h3 className="m-b-2">Over 10,000</h3>
              <p>Consumers always choose their protection</p>
            </li>
            <li>
              <img src={imagethree} alt width="90" height="90" />
              <h3 className="m-b-2">At all times</h3>
              <p>A Trustworthy seller</p>
            </li>
          </ul>
        </div>
        <div className="protect">
          <img src={imagefour} alt width="100" height="100" />
          <h2>The Safest way to purchase your product.</h2>
        </div>
      </React.Fragment>
      <Carou/>
    </>
  );
};

export default Main;
