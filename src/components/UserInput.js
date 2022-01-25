import React from "react";
<<<<<<< HEAD
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
=======
import '../styles/UserInput.css'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { doc, setDoc } from "firebase/firestore";
// import db from "../utils/firebase";

function UserInput({setType, typeRef, setSearchType, searchType}) {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#7DDF64',
        primary: '#7DDF64',
      }
    }
  }

  const handleChange= (e) => {
    setSearchType(e.target.value)
  }
  
  return (
  <>    
    <div className="search" id="search_container">
        <select onChange={(e) => {handleChange(e)}}>
          <option>Select Search Type-</option> 
          <option value="type">type</option>
          <option value="performers">performers</option>
        </select>
        
      <input ref={typeRef} id ="input" type="text" placeholder="Search Events by Type"/>
      <div className="search_btn">
        <button id="search" onClick={() => setType(typeRef.current.value)}>Search</button>
>>>>>>> ffe6be4b4b65e95b8d3faf6fd18eadf26c134062
      </div>
    </>
  );
}

export default UserInput;
