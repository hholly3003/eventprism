import React from "react";
import Event from "./Event";
import { useState, useEffect, Fragment } from "react";
import { v1 } from "uuid";
import UserInput from "./UserInput";

function EventsList({ name }) {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("events");

  useEffect(async () => {
    await fetch(
      `https://api.seatgeek.com/2/events?&venue.state=NY&client_id=MjUzNzU2NTF8MTY0MjI5NTUyNi40ODgzNzgz&per_page=100&format=json`
    )
      .then((response) => response.json())
      .then((json) => {
        const { events } = json;
        setItems(events);
      });
  }, [type]);
  return (
    <div className="events-list">
      <UserInput />
      <div className="container">
        {items.map((event) => {
          return (
            <Fragment key={v1()}>
              <Event name={event.venue.name} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default EventsList;
