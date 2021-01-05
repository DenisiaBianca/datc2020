// eslint-disable-next-line
import React, { useState } from "react";
import "../Styles/LoginPage.css";
import ProblemCard from "../Components/ProblemCard";
import MapContainer from "../Components/Map";
// import data from "../data.json";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import Galery from "../Components/ImageDialog";
import Services from "../Services/Services";
import { data } from "../Services/Interfaces";

const locations = [
  {
    name: "Gaura de canalizare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tortor ut leo pellentesque interdum et ut metus. Suspendisse facilisis eu ipsum id consectetur. ",
    location: {
      lat: 45.7494,
      lng: 21.2272,
    },
  },
  {
    name: "Copac daramat",
    description:
      "Nam porta bibendum nibh, id sagittis lacus commodo et. Nullam venenatis orci eu accumsan interdum. ",
    location: {
      lat: 45.7484,
      lng: 21.2472,
    },
  },
  {
    name: "Inundatie",
    description:
      " Aenean vitae nulla a nibh pellentesque dapibus. Aliquam lacinia volutpat blandit. ",
    location: {
      lat: 45.7594,
      lng: 21.2372,
    },
  },
  {
    name: "Gaura de canalizare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tortor ut leo pellentesque interdum et ut metus. Suspendisse facilisis eu ipsum id consectetur. ",
    location: {
      lat: 45.7464,
      lng: 21.2272,
    },
  },
  {
    name: "Gaura de canalizare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tortor ut leo pellentesque interdum et ut metus. Suspendisse facilisis eu ipsum id consectetur. ",
    location: {
      lat: 45.7498,
      lng: 21.2272,
    },
  },
  {
    name: "Inundatie",
    description:
      " Aenean vitae nulla a nibh pellentesque dapibus. Aliquam lacinia volutpat blandit. ",
    location: {
      lat: 45.7594,
      lng: 21.2372,
    },
  },
  {
    name: "Gaura de canalizare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tortor ut leo pellentesque interdum et ut metus. Suspendisse facilisis eu ipsum id consectetur. ",
    location: {
      lat: 45.7464,
      lng: 21.2272,
    },
  },
  {
    name: "Gaura de canalizare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tortor ut leo pellentesque interdum et ut metus. Suspendisse facilisis eu ipsum id consectetur. ",
    location: {
      lat: 45.7498,
      lng: 21.2272,
    },
  },
];
export default function AdminPage() {
  const [clickedLocation, setClickedLocation] = useState({
    lat: 45.7543,
    lng: 21.22709,
  });
  const [problems, setProblems] = useState([]);
  const [status, setStatus] = useState(false);
  const { getUser, updateProblem } = Services();

  const getProblems = async () => {
    const result = await getUser();
    setProblems(result.data);
    //console.log("Data: " + JSON.stringify(result.data));
  };

  useEffect(() => {
    getProblems();
  }, []);

  function ShowLocation(location: any) {
    setClickedLocation(location);
  }
  const sortByStatus = () => {
    if (status) {
      return (
        <div>
          {problems.map((d: data) => {
            if (d.status == "ToDo") {
              //console.log(d.id);
              return (
                <div key={Number(d.partitionKey)}>
                  <ProblemCard
                    sendLocation={(e: any) => ShowLocation(e)}
                    style="green"
                    problem={d}
                  ></ProblemCard>
                </div>
              );
            }
          })}
        </div>
      );
    } else {
      return (
        <div>
          {problems.map((d: data) => {
            if (d.status == "Nerezolvat") {
              //console.log(d.id);
              return (
                <div key={Number(d.partitionKey)}>
                  <ProblemCard
                    sendLocation={(e: any) => ShowLocation(e)}
                    style="red"
                    problem={d}
                  ></ProblemCard>
                </div>
              );
            } else if (d.status == 0) {
              //console.log(d.id);
              return (
                <div key={Number(d.partitionKey)}>
                  <ProblemCard
                    sendLocation={(e: any) => ShowLocation(e)}
                    style="orange"
                    problem={d}
                  ></ProblemCard>
                </div>
              );
            }
          })}
        </div>
      );
    }
  };

  return (
    <div className="admin">
      <div className="datas">
        <div className="buttons">
          <Button className="btn" onClick={() => setStatus(false)}>
            Probleme sesizate
          </Button>
          <Button className="btn" onClick={() => setStatus(true)}>
            Probleme rezolvate
          </Button>
        </div>
        <div className="card">
          <div className="card-body info">{sortByStatus()}</div>
        </div>
      </div>
      <div>
        <MapContainer loc={clickedLocation} />
      </div>
      {/* <Galery></Galery> */}
    </div>
  );
}
