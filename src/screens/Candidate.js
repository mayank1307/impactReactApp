import React from "react";
import { Link } from "react-router-dom";
import App from "../App";

export default class Candidate extends React.Component {
  render() {
    let selected = this.props.selected;
    return (
      <Link
        style={{
          fontFamily: "Poppins",
          textDecoration: "none",
          color: "black",
        }}
        to="/"
      >
        <App />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
          }}
        >
          <img
            src={selected.Image}
            alt={selected.name}
            width={300}
            height={300}
            style={{ borderRadius: 10, margin: 30 }}
          />
          <h1>
            <h1>{selected.id}</h1>
            {" " + selected.name}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            justifyContent: "space-evenly",
          }}
        >
          <h2
            style={{
              fontSize: 30,
              width: 300,
              backgroundColor: "#0f06",
              textAlign: "center",
              borderRadius: 10,
            }}
            onClick={() => this.props.setType(selected.id, 1)}
          >
            {"ShortList"}
          </h2>
          <h2
            style={{
              fontSize: 30,
              width: 300,
              backgroundColor: "#f006",
              textAlign: "center",
              borderRadius: 10,
            }}
            onClick={() => this.props.setType(selected.id, 2)}
          >
            {"Reject"}
          </h2>
        </div>
      </Link>
    );
  }
}
