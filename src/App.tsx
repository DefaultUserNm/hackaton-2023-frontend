import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { BoxTeamPreview } from "./components/Box/BoxTeam/BoxTeamPreview";

import ReactFlow from "reactflow";

import "./App.css";

import "reactflow/dist/style.css";
import { BoxComponentPreview } from "./components/Box/BoxComponent";
import { useGetProductDTOQuery } from "./services/api";
import { edges, nodes } from "./reactFLow";
import axios from "axios";

function App() {
  const { data, isError, isSuccess, isLoading } = useGetProductDTOQuery();

  useEffect(() => {
    axios
      .get("https://185.141.227.125:443/api/api/v1/products")
      .then((r) => console.log('response', r));
  }, []);

  if (isError) {
    console.error("Ошибка");
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={3} direction="column">
          <Grid item>
            {data?.[0].team?.users && (
              <BoxTeamPreview
                name={data[0]?.team?.name ?? ""}
                users={data[0]?.team.users}
              />
            )}
          </Grid>
          <Grid item>
            {data?.[0]?.components && (
              <BoxComponentPreview productComponents={data[0].components} />
            )}
          </Grid>
          <Grid item>
            <div style={{ width: "100vw", height: "30vh" }}>
              <ReactFlow nodes={nodes} edges={edges} />
            </div>
          </Grid>
        </Grid>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
