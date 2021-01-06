// eslint-disable-next-line
import React, { useState } from "react";
import "../Styles/LoginPage.css";
import ProblemCard from "../Components/ProblemCard";
import MapContainer from "../Components/Map";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import Services from "../Services/Services";
import { data } from "../Services/Interfaces";

export default function AdminPage() {
  const [clickedLocation, setClickedLocation] = useState({
    lat: 45.7543,
    lng: 21.22709,
  });
  const [problems, setProblems] = useState([]);
  const [refresh, setRefresh] = useState("");
  const [status, setStatus] = useState(false);
  const { getUser } = Services();

  const getProblems = async () => {
    const result = await getUser();
    setProblems(result.data);
    setRefresh("a");
    //console.log("Data: " + JSON.stringify(result.data));
  };

  useEffect(() => {
    getProblems();
  }, [refresh]);

  function ShowLocation(location: any) {
    setClickedLocation(location);
  }
  const sortByStatus = () => {
    if (status) {
      return (
        <div>
          {problems.map((d: data, key) => {
            if (d.status == "Rezolvat") {
              //console.log(d.id);
              return (
                <div key={key}>
                  <ProblemCard
                    sendLocation={(e: any) => ShowLocation(e)}
                    style="green"
                    problem={d}
                    refresh={(e: any) => setRefresh(e)}
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
          {problems.map((d: data, key) => {
            if (d.status == "Nerezolvat" || d.status == "Anulat") {
              //console.log(d.id);
              return (
                <div key={key}>
                  <ProblemCard
                    sendLocation={(e: any) => ShowLocation(e)}
                    style="red"
                    problem={d}
                    refresh={(e: any) => setRefresh(e)}
                  ></ProblemCard>
                </div>
              );
            } else if (d.status == "In desfasurare") {
              //console.log(d.id);
              return (
                <div key={key}>
                  <ProblemCard
                    sendLocation={(e: any) => ShowLocation(e)}
                    style="orange"
                    problem={d}
                    refresh={(e: any) => setRefresh(e)}
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
