import React, { useEffect } from "react";
import { Grid, Typography, Container, Card } from "@mui/material";
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
      .then((r) => console.log("response", r.data));
  }, []);

  if (isError) {
    console.error("Ошибка");
    return null;
  }

  return (
    <div className="App">
      <nav>
        <Container maxWidth="xl">
          <Typography variant="h2" color="text.primary" textAlign="left">
            УОВ
          </Typography>
        </Container>
      </nav>
      <header className="App-header">
        <Grid container spacing={3} direction="column">
          <Grid item>
            {data?.[0]?.teams.length && (
              <BoxTeamPreview
                name={data[0]?.teams[0]?.name ?? ""}
                users={data[0]?.teams[0]?.users}
              />
            )}
          </Grid>
          <Grid item>
            {data?.[0]?.components && (
              <BoxComponentPreview productComponents={data[0].components} />
            )}
          </Grid>
          <Grid item style={{ width: "100vw", height: "50vh" }}>
            {/*<Card>*/}
              <ReactFlow nodes={nodes} edges={edges} />
            {/*</Card>*/}
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
