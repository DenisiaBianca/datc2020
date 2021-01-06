import React, { CSSProperties, useState } from "react";
import "../Styles/LoginPage.css";
import "../Styles/Card.css";
import { Collapse } from "react-bootstrap";
import Services from "../Services/Services";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ImageDialog from "./ImageDialog";
import { useHistory } from "react-router-dom";

export default function ProblemCard(props: {
  problem: any;
  style: string;
  sendLocation: any;
  refresh: any;
}) {
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(props.problem.punctaj);
  const [stateOfProblem, setStateOfProblem] = useState(props.problem.status);
  const { updateProblem } = Services();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const history = useHistory();

  const style: CSSProperties = {
    color: props.style,
  };

  function SaveChanges() {
    const data = {
      PartitionKey: props.problem.partitionKey,
      RowKey: stateOfProblem,
      punctaj: score,
    };
    updateProblem(data);
  }

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  function openGalery() {
    setOpen(true);
  }

  const galery = () => {
    return (
      <ImageDialog
        imgs={props.problem.poza}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    );
  };

  return (
    <div>
      <div className="card problemCard">
        <div
          className="cardVis"
          onClick={() =>
            props.sendLocation({
              lat: Number(props.problem.lat),
              lng: Number(props.problem.lng),
            })
          }
        >
          <div className="card-body title">
            <h6 style={style}>{props.problem.titlu}</h6>
            <p>
              Sesizat de: {props.problem.rowKey} <br />
              Status: {stateOfProblem}
            </p>
          </div>
          <div className="img">
            <img
              src={props.problem.poza}
              onClick={() => openGalery()}
              alt=""
            ></img>
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
            <p>{props.problem.descriere}</p>
            <div>
              <Typography id="slider-score">Punctaj: {score}</Typography>
              <Slider
                key={Number(props.problem.partitionKey)}
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
            <div className="buttons">
              <Button
                className="btn1"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() => setStateOfProblem("Rezolvat")}
              >
                Rezolvat
              </Button>
              <Button
                className="btn1"
                style={{ backgroundColor: "orange", color: "white" }}
                onClick={() => setStateOfProblem("In desfasurare")}
              >
                In desfasurare
              </Button>
              <Button
                className="btn1"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => setStateOfProblem("Anulat")}
              >
                Anulat
              </Button>
            </div>
            <Button
              size="small"
              className="btn"
              onClick={() => {
                SaveChanges();
                props.refresh("ceva");
              }}
            >
              Salveaza modificarile
            </Button>
          </div>
        </Collapse>
      </div>
      {galery()}
    </div>
  );
}
