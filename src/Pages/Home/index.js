import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png";
import randomBeer from "../../assets/random-beer.png";

export function Home() {
  return (
    <div
      style={{
        maxWidth: "700px",
        marginLeft: "250px",
      }}
    >
      <section>
        <Link
          to={"/beers"}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <img src={beers} alt="all beers" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nisi illo minus soluta vel, blanditiis eaque, quis iusto assumenda
            numquam error unde cumque. Fuga cum itaque dignissimos omnis
            voluptatum nobis!
          </p>
        </Link>
      </section>
      <section>
        <Link
          to={"/random-beer"}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <img src={randomBeer} alt="random beers" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nisi illo minus soluta vel, blanditiis eaque, quis iusto assumenda
            numquam error unde cumque. Fuga cum itaque dignissimos omnis
            voluptatum nobis!
          </p>
        </Link>
      </section>
      <section>
        <img src={newBeer} alt="new beers" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi
          illo minus soluta vel, blanditiis eaque, quis iusto assumenda numquam
          error unde cumque. Fuga cum itaque dignissimos omnis voluptatum nobis!
        </p>
      </section>
    </div>
  );
}
