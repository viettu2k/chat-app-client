import React, { userState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const [name, setName] = userState("");
  const [room, setRoom] = userState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="joinInput"
            type="text"
            placeholder=""
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            className="joinInput mt-20"
            type="text"
            placeholder=""
            onChange={(event) => setRoom(event.target.value)}
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
