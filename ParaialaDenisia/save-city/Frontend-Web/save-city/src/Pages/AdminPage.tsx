// eslint-disable-next-line
import React, { useState } from "react";
import "../Styles/LoginPage.css";
import ProblemCard from "../Components/ProblemCard";
import MapContainer from "../Components/Map";
import ProblemList from "../Components/ProblemList";
import data from "../data.json";
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

  function ShowLocation(location: any) {
    setClickedLocation(location);
  }

  return (
    <div className="admin">
      <div className="datas">
        <div className="buttons">
          <button type="button" className="btn btn-dark">
            Probleme sesizate
          </button>
          <button type="button" className="btn btn-dark">
            Probleme rezolvate
          </button>
        </div>
        <div className="card">
          <div className="card-body info">
            {data.map((l, key) => (
              <div
                key={key}
                onClick={() =>
                  ShowLocation({ lat: l.Latitudine, lng: l.Longitudine })
                }
              >
                <ProblemCard
                  nume={l.Titlu}
                  description={l.Descriere}
                  user={l.User}
                  imag={l.Imagini}
                  status={l.Status}
                ></ProblemCard>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <MapContainer loc={clickedLocation} />
      </div>
    </div>
  );
}
