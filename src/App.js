import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BeerList } from "./components/BeerList";
import { SingleBeer } from "./components/SingleBeer";
import "./global.css";
import { Home } from "./Pages/Home";
import axios from "axios";
import { RandomBeer } from "./components/RandomBeer";
import { NewBeer } from "./components/NewBeer";

export function App() {
  const [beers, setBeers] = useState([]);
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeers();
  }, []);

  useEffect(() => {
    async function randomBeer() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    randomBeer();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beers"
          element={<BeerList beers={beers} setBeers={setBeers} />}
        />
        <Route path="/beers/:beerId" element={<SingleBeer beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer beer={beer} />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}
