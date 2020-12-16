import React, { useState } from "react";
import "../Styles/LoginPage.css";
import { useGoogleMaps } from "react-hook-google-maps";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ProblemCard from "../Components/ProblemCard";

export default function AdminPage() {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  const tm = {
    location: {
      lat: 45.7494,
      lng: 21.2272,
    },
  };
  const [loc, setLoc] = useState(tm.location);
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

  const MapContainer = () => {
    const mapStyles = {
      height: "100%",
      width: "100%",
    };

    const defaultCenter = {
      lat: 45.7494,
      lng: 21.2272,
    };

    return (
      <LoadScript googleMapsApiKey="AIzaSyCr4X2-RTeFsovHQNqKyJjO_e7-X3oJ540">
        <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={loc}>
          <Marker key={10} position={loc} />;
        </GoogleMap>
      </LoadScript>
    );
  };

  function ShowLocation(location: any) {
    setLoc(location);
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
            {locations.map((l) => (
              <div onClick={() => ShowLocation(l.location)}>
                <ProblemCard
                  nume={l.name}
                  description={l.description}
                ></ProblemCard>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>{MapContainer()}</div>
    </div>
  );
}
