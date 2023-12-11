import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Trader = () => {
  const [trader, setTrader] = useState([]);
  const [ads, setAds] = useState([]);

  const baseURL = "http://localhost:8080";

  const navigate = useNavigate();

  const createTraderClickHandler = async () => {
    await axios
      .post(baseURL + "/trader/", {
        email: "anders@loren.com",
        name: "anders loren",
        password: "1234",
      })
      .then((response) => {
        console.log("RESPONSE:", response);
        if (response.status == 200) {
          console.log("DATA,", response.data);
          setTrader(response.data);
        }
      });
  };

  const getTraderClickHandler = async () => {
    await axios
      .get(baseURL + "/trader/")
      .then((response) => {
        console.log("RESPONSE:", response);
        if (response.status === 200) {
          console.log("DATA", response.data);
          setTrader(response.data);
        }
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  const getTraderAdsClickHandler = async () => {
    await axios
      .get(baseURL + "/ads/trader/")
      .then((response) => {
        console.log("RESPONSE:", response);
        if (response.status === 200) {
          console.log("DATA", response.data);
          setAds(response.data);
        }
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-success"
            onClick={createTraderClickHandler}
          >
            Create or Sign in
          </button>
          <button
            className="btn btn-success"
            onClick={getTraderAdsClickHandler}
          >
            Get User Ads
          </button>
        </div>
      </div>
      <div className="container">
        <h3>Email: {trader.email}</h3>
        <h3>Name: {trader.name}</h3>
        <h3>Sessions ends: {trader.sessionEnd}.</h3>
      </div>
      {ads.map((ad) => (
        <div key={ad.id} className="card mb-4 col-mb-3">
          <div className="card-body">
            <h2 className="card-title">{ad.title}</h2>
            <h5 className="card-title">{ad.description}</h5>
            <button
              className="btn btn-info"
              onClick={() => navigate("/details/" + ad.id)}
            >
              Details
            </button>
            <div className="card-title">Seller: {ad.seller}</div>
            <div className="card-title">Contact: {ad.contact}</div>
          </div>
          <div className="d-grid card-footer">
            <button type="button" className="btn btn-success">
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trader;
