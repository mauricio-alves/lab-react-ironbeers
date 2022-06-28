import { Header } from "../Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function SingleBeer({ beers }) {
  const { beerId } = useParams();

  const [singleBeer, setSingleBeer] = useState([]);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setSingleBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeer();
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: "700px",
          marginLeft: "250px",
        }}
      >
        <div>
          <img
            src={singleBeer.image_url}
            alt="beer"
            style={{
              width: "50px",
              textAlign: "center",
            }}
          />
        </div>
        <div style={{ textAlign: "left" }}>
          <h2 className="card-title">
            {singleBeer.name}{" "}
            <span
              className="card-text"
              style={{ marginLeft: "400px", color: "#D8D8D8" }}
            >
              {singleBeer.attenuation_level}
            </span>
          </h2>
          <h5 className="card-text" style={{ color: "#B0B0B0" }}>
            {singleBeer.tagline}{" "}
            <span
              className="card-text"
              style={{
                marginLeft: "380px",
                fontSize: "14px",
                color: "black",
              }}
            >
              <b>{singleBeer.first_brewed}</b>
            </span>
          </h5>
          <h5 className="card-text">{singleBeer.description}</h5>
          <p className="card-text">
            <small className="text-muted">
              <b>Created by:</b> {singleBeer.contributed_by}
            </small>
          </p>
        </div>
      </div>
    </>
  );
}
