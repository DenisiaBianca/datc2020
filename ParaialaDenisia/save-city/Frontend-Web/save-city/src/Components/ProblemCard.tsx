import React from "react";
import "../Styles/LoginPage.css";
import "../Styles/Card.css";

export default function ProblemCard(props: {
  nume: string;
  description: string;
  user: any;
  imag: any;
  status: string;
}) {
  return (
    <div>
      <div className="card problemCard">
        <div className="card-body title">
          <h6>{props.nume}</h6>
          <p>
            Sesizat de: {props.user.nume} {props.user.prenume} <br />
            Status: {props.status}
          </p>
        </div>
        <div className="img">
          <img src={props.imag[0].url}></img>
        </div>
        <div className="details">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
