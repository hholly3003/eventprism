import React from "react";
import "../styles/UserInput.css";
// import { doc, setDoc } from "firebase/firestore";
// import db from "../utils/firebase";

function UserInput({ setType, typeRef }) {
  return (
    <>
      <div className="search" id="search_container">
        <select>
          <option></option>
        </select>
        <input
          ref={typeRef}
          id="input"
          type="text"
          placeholder="Search Events by Type"
        />
        <div className="search_btn">
          <button id="search" onClick={() => setType(typeRef.current.value)}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default UserInput;
