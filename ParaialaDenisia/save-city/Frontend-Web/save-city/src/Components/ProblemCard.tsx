import React from "react";
import "../Styles/LoginPage.css";

export default function ProblemCard(props: {
  nume: string;
  description: string;
}) {
  const nume: string = props.nume;
  const description: string = props.description;

  return (
    <div>
      <div className="card problemCard">
        <div className="card-body">
          <h6>{nume}</h6>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
