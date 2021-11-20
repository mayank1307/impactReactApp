import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "../App";
import Candidate from "./Candidate";

export default class Home extends Component {
  state = {
    isLoading: true,
    candidates: [],
    notFound: false,
    selected: {},
    search: "",
  };
  setType = async (id, type) => {
    let candidates = [];
    let data = JSON.parse(await localStorage.getItem("candidates"));
    data.map((candidate) => {
      if (candidate.id === id) candidate.type = type;
      candidates.push(candidate);
      return true;
    });
    localStorage.setItem("candidates", JSON.stringify(candidates));
    this.setState({ candidates });
  };
  getData() {
    if (this.state.search === "" || this.state.search === null) {
      return this.state.candidates.filter((candidate) => {
        return candidate.type === this.props.type || this.props.type === 0;
      });
    } else {
      return this.state.candidates.filter((candidate) => {
        return (
          (candidate.type === this.props.type || this.props.type === 0) &&
          candidate.name.toLowerCase().includes(this.state.search.toLowerCase())
        );
      });
    }
  }
  componentDidMount() {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ candidates: result });
        localStorage.setItem("candidates", JSON.stringify(result));
      })
      .catch((error) => this.setState({ notFound: true }))
      .finally(() => this.setState({ isLoading: false }));
  }
  searchUser(user) {
    this.setState({ search: user.target.value });
  }
  render() {
    return this.state.isLoading ? (
      <h1 style={{ textAlign: "center", padding: 100 }}>
        Loading please wait...
      </h1>
    ) : this.props.type === 4 ? (
      <Candidate selected={this.state.selected} setType={this.setType} />
    ) : (
      <div
        style={{
          fontFamily: "Poppins",
        }}
      >
        <App />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search for any candidate..."
            onChange={(e) => this.searchUser(e)}
            style={{ width: 500, padding: 10, margin: 10 }}
          />
        </div>
        {this.getData().length > 0 && (
          <div
            style={{
              textDecoration: "none",
              color: "black",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "center",
              borderBottom: "1px solid",
            }}
          >
            <h2 style={{ width: 100 }}>
              {this.props.type === 1
                ? "SHORTLISTED"
                : this.props.type === 2
                ? "REJECTED"
                : "ALL"}
            </h2>
            <h2 style={{ width: 400 }}>{"NAME"}</h2>
            <h2 style={{ width: 100 }}>{"ID"}</h2>
            <h3
              style={{
                color: "black",
                width: 150,
              }}
            >
              {"Status"}
            </h3>
          </div>
        )}
        {this.getData().length > 0 ? (
          this.getData().map((candidate) => {
            return (
              <Link
                onClick={() => this.setState({ selected: candidate })}
                to={`/${candidate.id}`}
                key={candidate.id}
                style={{
                  textDecoration: "none",
                  color: "black",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  alignItems: "center",
                  borderBottom: "1px solid",
                }}
              >
                <img
                  src={candidate.Image}
                  alt={candidate.name}
                  width={100}
                  height={100}
                  style={{ borderRadius: 5 }}
                />
                <h2 style={{ width: 400 }}>{candidate.name}</h2>
                <h2
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    width: 100,
                    textAlign: "center",
                    borderRadius: 5,
                  }}
                >
                  {candidate.id}
                </h2>
                <h3
                  style={{
                    color:
                      candidate.type === 1
                        ? "green"
                        : candidate.type === 2
                        ? "orangered"
                        : "black",
                    width: 150,
                  }}
                >
                  {candidate.type === 1
                    ? "Shortlisted"
                    : candidate.type === 2
                    ? "Rejected"
                    : "Review"}
                </h3>
              </Link>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center", padding: 100 }}>
            No candidates found
          </h1>
        )}
      </div>
    );
  }
}
