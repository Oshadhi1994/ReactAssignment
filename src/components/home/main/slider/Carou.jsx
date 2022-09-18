import React from "react";
import "./carou.css";
import Carousel from "react-bootstrap/Carousel";

const Carou = () => {
  return (
    <React.Fragment>
      <Carousel variant="dark">
        <Carousel.Item>
          <div className="cards-wrapper">
            <div className="card">
              <div className="image-wrapper">
                <img src="https://static.chrono24.com/images/default/illustrations/sv-buyers-protection.svg" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Payment via the Escrow Service</h3>
                <p className="card-text">
                  We keep your money in our escrow account for{" "}
                  <span className="text-underline">14 days</span> after delivery of
                  your product. Thus, you have time to inspect your order
                  knowing your money carefully is safe in our account.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image-wrapper">
                <img src="https://static.chrono24.com/images/default/illustrations/sv-authenticity-guarantee.svg" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Authenticity Guarantee</h3>
                <p className="card-text">
                  We want to list our products. If you have any doubts about
                  your product's authenticity, you have 14 days to report your
                  suspicions to the OUR support team and receive your money
                  back.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image-wrapper">
                <img src="https://static.chrono24.com/images/default/illustrations/sv-money-back-guarantee.svg" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">money-back guarantee</h3>
                <p className="card-text">
                  If the cutting wheels arrive and are defective or not as the
                  seller described, you have 14 days to initiate a return and
                  receive your money back.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cards-wrapper">
            <div className="card">
              <div className="image-wrapper">
                <img src="https://static.chrono24.com/images/default/illustrations/sv-dealer-guidelines.svg" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">sales guidelines</h3>
                <p className="card-text">
                  We follow a set of rules with you. It is for your and our
                  protection.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image-wrapper">
                <img src="https://static.chrono24.com/images/default/illustrations/sv-safe-delivery.svg" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Insured Shipments</h3>
                <p className="card-text">
                  We ship all orders completely securely, so you can make any
                  purchases risk-free.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image-wrapper">
                <img src="https://static.chrono24.com/images/default/illustrations/sv-team.svg" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Products' Quality & Security Team</h3>
                <p className="card-text">
                  Our quality & security team works hard to detect suspicious
                  listings and address issues before they arise.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};

export default Carou;
