import { Header } from "../Header";
import { useParams } from "react-router-dom";

export function SingleBeer({ beers }) {
  const { id } = useParams();
  return (
    <>
      <Header />
      {beers
        .filter((beer) => {
          return beer._id.includes(id);
        })
        .map((currentBeer) => {
          return (
            <div
              style={{
                maxWidth: "700px",
                marginLeft: "250px",
              }}
            >
              <div>
                <img
                  src={currentBeer.image_url}
                  alt="beer"
                  style={{
                    width: "50px",
                    textAlign: "center",
                  }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <h2 className="card-title">
                  {currentBeer.name}{" "}
                  <span
                    className="card-text"
                    style={{ marginLeft: "400px", color: "#D8D8D8" }}
                  >
                    {currentBeer.attenuation_level}
                  </span>
                </h2>
                <h5 className="card-text" style={{ color: "#B0B0B0" }}>
                  {currentBeer.tagline}{" "}
                  <span
                    className="card-text"
                    style={{
                      marginLeft: "380px",
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    <b>{currentBeer.first_brewed}</b>
                  </span>
                </h5>
                <h5 className="card-text">{currentBeer.description}</h5>
                <p className="card-text">
                  <small className="text-muted">
                    <b>Created by:</b> {currentBeer.contributed_by}
                  </small>
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}
