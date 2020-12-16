import React from "react";
import "../Styles/LoginPage.css";
import { useGoogleMaps } from "react-hook-google-maps";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function AdminPage() {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

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
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    );
  };

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
          <div className="card-body">This is some text within a card body.</div>
        </div>
      </div>
      <div>{MapContainer()}</div>
    </div>
  );
}
