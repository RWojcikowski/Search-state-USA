import React from "react";

const App = () => {
    return(
        <div className="dropdown is-active">
  <div className="dropdown-trigger">
  <input class="input is-large" type="text" placeholder="Large input"/>
  </div>
  <div 
  className="dropdown-menu" 
  id="dropdown-menu" 
  role="menu">
    <div 
    className="dropdown-content">
      <a
       href="#" 
      className="dropdown-item">
        Dropdown item
      </a>
      <a 
      className="dropdown-item">
        Other dropdown item
      </a>
      <a
       href="#"
        className="dropdown-item is-active">
        Active dropdown item
      </a>
    </div>
  </div>
</div>
    )
}

export default App;