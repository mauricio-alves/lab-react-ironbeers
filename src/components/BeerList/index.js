import { Header } from "../Header";
import { Link } from "react-router-dom";

export function BeerList({ beers }) {
  return (
    <>
      <Header />
      {beers.map((currentBeer) => {
        return (
          <Link
            to={`/${currentBeer._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              className="card mb-3"
              style={{
                maxWidth: "700px",
                marginLeft: "250px",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={currentBeer.image_url}
                    alt="beer"
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{currentBeer.name}</h2>
                    <h5 className="card-text">{currentBeer.tagline}</h5>
                    <p className="card-text">
                      <small className="text-muted">
                        <b>Created by:</b> {currentBeer.contributed_by}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
