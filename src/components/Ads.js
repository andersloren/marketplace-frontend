import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Ads = () => {
  const [ads, setAds] = useState([]);

  const baseURL = "http://localhost:8080";

  const navigate = useNavigate();

  const getAllAdsClickHandler = async () => {
    console.log("start");

    await axios
      .get(baseURL + "/ads/")
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

    console.log("end");
  };

  const createAdsClickHandler = async () => {
    await axios
      .post(baseURL + "/ads/", {
        title: "This is a title",
        description: "This is a description",
        email: "anders@loren.com",
      })
      .then((response) => {
        console.log("RESPONSE:", response);
        if (response.status === 201) {
          console.log("Creating ad is Done!");
          getAllAdsClickHandler();
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
            className="btn btn-info"
            type="button"
            onClick={getAllAdsClickHandler}
          >
            Get All Ads
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={createAdsClickHandler}
          >
            Create New Ad
          </button>
        </div>
        <div className="container mt-5">
          <div className="row">
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
        </div>
      </div>
    </div>
  );
};

export default Ads;
