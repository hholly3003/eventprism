import React from "react";
import '../styles/UserInput.css'

function UserInput({setType, typeRef, setSearchType, searchType}) {

  const handleChange= (e) => {
    setSearchType(e.target.value)
  }
  
  return (
    <div className="search" id="search_container">
        <select onChange={(e) => {handleChange(e)}}>
          <option>Select Search Type-</option> 
          <option value="type">type</option>
          <option value="performers">performers</option>
        </select>
        
      <input ref={typeRef} id ="input" type="text" placeholder="Search Events by Type"/>
      <div className="search_btn">
        <button id="search" onClick={() => setType(typeRef.current.value)}>Search</button>
      </div>
    </div>
  );
}

export default UserInput;
