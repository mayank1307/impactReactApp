import { Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        fontFamily: "Poppins",
        borderBottom: "3px solid",
      }}
    >
      <h2 style={{ color: "black", textDecoration: "none" }}>
        IMPACT TEST CANDIDATES
      </h2>
      <nav>
        <Link
          style={{
            color: "black",
            paddingRight: 10,
            textDecoration: "none",
          }}
          to="/"
        >
          All
        </Link>
        <Link
          style={{
            color: "black",
            paddingRight: 10,
            textDecoration: "none",
          }}
          to="/shortlisted"
        >
          Shortlisted
        </Link>
        <Link
          style={{
            color: "black",
            paddingRight: 10,
            textDecoration: "none",
          }}
          to="/rejected"
        >
          Rejected
        </Link>
      </nav>
    </div>
  );
}

export default App;
