import React, { CSSProperties, useEffect, useState } from "react";
import "../Styles/LoginPage.css";
import "../Styles/Card.css";
import { Collapse } from "react-bootstrap";
import { getDefaultSettings } from "http2";
import Services from "../Services/Services";

interface data {
  rowKey: React.ReactNode;
  partitionKey: React.ReactNode;
  timestamp: React.ReactNode;
  eTag: React.ReactNode;
}

export default function ProblemCard(props: { problem: any; style: string }) {
  const [show, setShow] = useState(false);
  const [datas, setData] = useState([]);
  const { getUser } = Services();

  const getData = async () => {
    const result = await getUser();
    setData(result.data);
    console.log("Data: " + JSON.stringify(result.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const status = () => {
    if (props.problem.Status == 2) {
      return "Rezolvat";
    } else if (props.problem.Status == 1) {
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
        <div className="cardVis">
          <div className="card-body title">
            <h6 style={style}>{props.problem.Titlu}</h6>
            <p>
              Sesizat de: {props.problem.User.nume} {props.problem.User.prenume}{" "}
              <br />
              Status: {status()}
            </p>
          </div>
          <div className="img">
            <img src={props.problem.Imagini[0].url}></img>
          </div>
        </div>
        <button
          onClick={() => setShow(!show)}
          aria-controls="example-collapse-text"
          aria-expanded={show}
          className="btn"
        >
          click
        </button>
        <Collapse in={show}>
          <div id="example-collapse-text" className="details">
            <p>{props.problem.Descriere}</p>
            <p>Punctaj: {props.problem.Punctaj}</p>
            {/* {Object.keys(datas).map((index) => {
              [datas].map((item, index) => {
                <div>
                  <p>ceva</p>
                  <p>{item}</p>
                </div>;
              });
            })} */}
            {datas.map((d: data, i: any) => (
              <div key={i}>
                <p>{d.rowKey}</p>
                <p>{d.partitionKey}</p>
                <p>{d.timestamp}</p>
                <p>{d.eTag}</p>
              </div>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
}
