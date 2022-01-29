import React from "react";
import "../styles/UserInput.css";
import searchIcon from '../images/icons8-search-50.png'


function UserInput({ setType, typeRef, setSearchType }) {

  const handleChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="search-conatiner">
      <div className="search">
        <select
            className="select"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value={null}>Select Type</option>
            <option value="type">type</option>
            <option value="performers">performers</option>
        </select>
        <input
          ref={typeRef}
          className="input"
          type="text"
          placeholder="Search Events by Type"
        />
        <div className="search_btn">
          <img src={searchIcon} id="search" onClick={() => setType(typeRef.current.value)}/>
        </div>
      </div>
    </div>
  );
}

export default UserInput;
