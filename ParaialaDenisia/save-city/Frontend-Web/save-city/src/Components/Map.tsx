// eslint-disable-next-line
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import React, { useEffect } from "react";
import { Marker } from "react-google-maps";
import { useState } from "react";
import { Console } from "console";

export const MapContainer = (props: { loc: any }) => {
  const clickedLocation = props.loc;

  function Map(props: any) {
    return (
      <div>
        <GoogleMap defaultZoom={15} defaultCenter={clickedLocation}>
          <Marker key={13} position={clickedLocation} visible />
        </GoogleMap>
      </div>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDPw6OFPOYx4GhFAis3vSLKB0P1w8VE7Oc`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      ></WrappedMap>
    </div>
  );
};

export default MapContainer;
