import React from "react";
import Card from "./Card";

function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
