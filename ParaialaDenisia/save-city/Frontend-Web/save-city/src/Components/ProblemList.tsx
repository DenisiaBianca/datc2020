import React, { ReactNode, useState } from "react";
import { RouteProps } from "react-router-dom";
import ProblemCard from "./ProblemCard";
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

export const ProblemList = (props: { data: any }) => {
  let { data } = props;
  const [showLoc, setShowLoc] = useState();

  function ShowLocation(location: any) {
    setShowLoc(location);
    data = showLoc;
  }
  return (
    <div>
      <div className="datas">
        <div className="buttons">
          <button type="button" className="btn btn-dark">
            Probleme sesizate
          </button>
          <button type="button" className="btn btn-dark">
            Probleme rezolvate
          </button>
        </div>
        {locations.map((l, key) => (
          <div key={key} onClick={() => ShowLocation(l.location)}>
            <ProblemCard
              nume={l.name}
              description={l.description}
            ></ProblemCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemList;
