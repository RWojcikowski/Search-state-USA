import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import states from "../states.json";
import classnames from "classnames";
import StatePage from "./StatePage";
import StateSearch from "./StateSearch";

const App = () => {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">Search states USA</p>
        </div>
      </section>

      <div className="field">
        <label className="label ">Search by:</label>
        <div class="select is-info">
          <select>
            <option>Name</option>
            <option>Code state </option>
            <option>Capital city </option>
          </select>
        </div>
      </div>

      <StateSearch />

      <div className="field">
        <label className="label ">Show Data:</label>
        <div class="select is-info">
          <select>
            <option>Table</option>
            <option>Symbols</option>
            <option>Map</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
