import React, { CSSProperties, useEffect, useState } from "react";
import "../Styles/LoginPage.css";
import "../Styles/Card.css";
import { Collapse } from "react-bootstrap";
import { getDefaultSettings } from "http2";
import Services from "../Services/Services";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

interface data {
  rowKey: React.ReactNode;
  partitionKey: React.ReactNode;
  timestamp: React.ReactNode;
  eTag: React.ReactNode;
}

export default function ProblemCard(props: {
  problem: any;
  style: string;
  sendLocation: any;
}) {
  const [show, setShow] = useState(false);
  const [datas, setData] = useState([]);
  const [score, setScore] = useState(props.problem.Punctaj);
  const [stateOfProblem, setStateOfProblem] = useState(props.problem.Status);
  const { getUser, updateProblem } = Services();

  const getData = async () => {
    const result = await getUser();
    setData(result.data);
    //console.log("Data: " + JSON.stringify(result.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const status = () => {
    if (stateOfProblem == 2) {
      return "Rezolvat";
    } else if (stateOfProblem == 1) {
      return "Nerezolvat";
    } else if (stateOfProblem == 3) {
      return "Anulat";
    } else {
      return "In desfasurare";
    }
  };

  const style: CSSProperties = {
    color: props.style,
  };

  function SaveChanges() {
    const data = {
      score: score,
      state: stateOfProblem,
      problemId: props.problem.id,
    };
    updateProblem(data);
  }

  return (
    <div>
      <div className="card problemCard">
        <div
          className="cardVis"
          onClick={() =>
            props.sendLocation({
              lat: props.problem.Latitudine,
              lng: props.problem.Longitudine,
            })
          }
        >
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
        <Button
          className="btn"
          size="small"
          onClick={() => setShow(!show)}
          aria-controls="example-collapse-text"
          aria-expanded={show}
        >
          Vezi detalii
        </Button>
        <Collapse in={show}>
          <div id="example-collapse-text" className="details">
            <p>{props.problem.Descriere}</p>
            <div>
              <Typography id="slider-score">Punctaj: {score}</Typography>
              <Slider
                key={props.problem.Id}
                value={score}
                aria-labelledby="slider-score"
                step={5}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
                onChange={(e, v) => setScore(v)}
              />
            </div>
            {/* {datas.map((d: data, i: any) => (
              <div key={i}>
                <p>{d.rowKey}</p>
                <p>{d.partitionKey}</p>
                <p>{d.timestamp}</p>
                <p>{d.eTag}</p>
              </div>
            ))} */}
            <div className="buttons">
              <Button
                className="btn1"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() => setStateOfProblem(2)}
              >
                Rezolvat
              </Button>
              <Button
                className="btn1"
                style={{ backgroundColor: "orange", color: "white" }}
                onClick={() => setStateOfProblem(0)}
              >
                In desfasurare
              </Button>
              <Button
                className="btn1"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => setStateOfProblem(3)}
              >
                Anulat
              </Button>
            </div>
            <Button size="small" className="btn" onClick={() => SaveChanges()}>
              Salveaza modificarile
            </Button>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
