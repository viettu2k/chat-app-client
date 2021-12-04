import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function Join() {
  const [values, setValues] = useState({
    name: "",
    room: "",
  });

  const { name, room } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="joinInput"
            type="text"
            placeholder=""
            onChange={handleChange("name")}
            value={name}
          />
        </div>
        <div>
          <input
            className="joinInput mt-20"
            type="text"
            placeholder=""
            onChange={handleChange("room")}
            value={room}
          />
        </div>

        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
