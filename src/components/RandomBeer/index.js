import { Header } from "../Header";

export function RandomBeer({ beer }) {
  return (
    <div>
      <Header />
      <div
        style={{
          maxWidth: "700px",
          marginLeft: "250px",
        }}
      >
        <div>
          <img
            src={beer.image_url}
            alt="beer"
            style={{
              width: "50px",
              textAlign: "center",
            }}
          />
        </div>
        <div style={{ textAlign: "left" }}>
          <h2 className="card-title">
            {beer.name}{" "}
            <span
              className="card-text"
              style={{ marginLeft: "400px", color: "#D8D8D8" }}
            >
              {beer.attenuation_level}
            </span>
          </h2>
          <h5 className="card-text" style={{ color: "#B0B0B0" }}>
            {beer.tagline}{" "}
            <span
              className="card-text"
              style={{
                marginLeft: "380px",
                fontSize: "14px",
                color: "black",
              }}
            >
              <b>{beer.first_brewed}</b>
            </span>
          </h5>
          <h5 className="card-text">{beer.description}</h5>
          <p className="card-text">
            <small className="text-muted">
              <b>Created by:</b> {beer.contributed_by}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
