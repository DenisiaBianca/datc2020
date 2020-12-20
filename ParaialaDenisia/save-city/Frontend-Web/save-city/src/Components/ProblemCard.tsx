import React, { CSSProperties } from "react";
import "../Styles/LoginPage.css";
import "../Styles/Card.css";

export default function ProblemCard(props: {
  nume: string;
  description: string;
  user: any;
  imag: any;
  status: number;
  style: string;
}) {
  const status = () => {
    if (props.status == 2) {
      return "Rezolvat";
    } else if (props.status == 1) {
      return "Nerezolvat";
    } else {
      return "In desfasurare";
    }
  };

  const style: CSSProperties = {
    color: props.style,
  };
  return (
    <div>
      <div className="card problemCard">
        <div className="card-body title">
          <h6 style={style}>{props.nume}</h6>
          <p>
            Sesizat de: {props.user.nume} {props.user.prenume} <br />
            Status: {status()}
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
