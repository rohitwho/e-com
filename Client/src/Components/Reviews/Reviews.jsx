import React from "react";

function Reviews({ Rating, Review, Profile, Name, PostedAt }) {
  function renderStars(Rating) {
    const maxStars = 5;
    const stars = [];
    for (let index = 0; index < maxStars; index++) {
      if (index <= Rating) {
        stars.push(<span key={index}>&#9733;</span>); // Render a filled star
      } else {
        stars.push(<span key={index}>&#9734;</span>); // Render an empty star
      }
    }

    return stars;
  }
  renderStars();

  return (
    <div
      style={{
        borderBottom: "inset",
        padding: "2%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <span> Rating:{renderStars(Rating)}</span>
      <p>{Review}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            aspectRatio: "1",
            width: "2rem",
          }}
        >
          {Profile}
        </span>{" "}
        <p>{Name}</p> <span>{new Date(PostedAt).toLocaleString()}</span>
      </div>
    </div>
  );
}

export default Reviews;
