import axios from "axios";
import { useState } from "react";
import { Header } from "../Header";

export function NewBeer() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    firstBrewed: "",
    brewerTips: "",
    attenuationLevel: 0,
    contributedBy: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const result = axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      form
    );
    console.log(result);
  }

  return (
    <div>
      <Header />

      <form
        onSubmit={handleSubmit}
        className="form-text"
        style={{
          maxWidth: "700px",
          marginLeft: "250px",
          textAlign: "left",
        }}
      >
        <label htmlFor="input-name">
          <b>Name</b>
        </label>
        <br />
        <input
          id="input-name"
          type="text"
          value={form.name}
          className="form-control"
          onChange={handleChange}
          name="name"
        />
        <br />
        <label htmlFor="input-tagline">
          <b>Tagline</b>
        </label>
        <br />
        <input
          id="input-tagline"
          type="text"
          value={form.tagline}
          name="tagline"
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="textarea-description">
          <b>Description</b>
        </label>
        <br />
        <textarea
          id="textarea-description"
          className="form-control"
          value={form.description}
          name="description"
          cols="40"
          rows="5"
          onChange={handleChange}
        ></textarea>
        <br />
        <label htmlFor="input-firs-brewed">
          <b>First Brewed</b>
        </label>
        <br />
        <input
          id="input-firs-brewed"
          type="text"
          value={form.firstBrewed}
          name="firstBrewed"
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="input-brewers-tips">
          <b>Brewers Tips</b>
        </label>
        <br />
        <input
          id="input-brewers-tips"
          type="text"
          value={form.brewerTips}
          name="brewerTips"
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="input-attenuation-level">
          <b>Attenuation Level</b>
        </label>
        <br />
        <input
          id="input-attenuation-level"
          type="number"
          value={form.attenuationLevel}
          name="attenuationLevel"
          className="form-control"
          onChange={(e) =>
            setForm({ ...form, attenuationLevel: Number(e.target.value) })
          }
        />
        <br />
        <label htmlFor="input-contributed-by">
          <b>Contributed By</b>
        </label>
        <br />
        <input
          id="input-contributed-by"
          type="text"
          value={form.contributedBy}
          name="contributedBy"
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="btn btn-primary form-control">
          ADD NEW
        </button>
      </form>
    </div>
  );
}
