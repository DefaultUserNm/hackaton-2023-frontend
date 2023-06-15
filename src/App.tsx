import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { BoxPreview } from "./components/Box/BoxPreview";
import ReactFlow from "reactflow";

import "./App.css";

import "reactflow/dist/style.css";
import { BoxComponentPreview } from "./components/Box/BoxComponent";
import { useGetProductDTOQuery } from "./services/api";

const components = [
  { name: "BH", count: 3 },
  { name: "PL", count: 2 },
];

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Первый" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "Второй" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const members = [
  { firstName: "Кабаков", lastName: "Александр", id: "1" },
  { firstName: "Агеев", lastName: "Евгений", id: "2" },
  { firstName: "Алёна", lastName: "Непряхина", id: "3" },
];

function App() {
  // const { data } = api.endpoints.getPosts.useQuery();
  // const [updatePost, { data }] = api.endpoints.updatePost.useMutation();
  // const { data, isError, isSuccess, isLoading } = useGetProductDTOQuery();

  useEffect(() => {
    // console.log({data});

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/*<div style={{ width: '100vw', height: '100vh' }}>*/}
        {/*    <ReactFlow nodes={initialNodes} edges={initialEdges} />*/}
        {/*</div>*/}
        <Grid container spacing={3} direction="column">
          <Grid item>
            <BoxPreview
              title={"Команда"}
              type={"team"}
              id={"1"}
              leader={"Чанов Владимир"}
              members={members}
              total={3}
            />
          </Grid>
          <Grid item>
            <BoxComponentPreview
              total={10}
              title={"Компоненты"}
              productComponents={components}
            />
          </Grid>
        </Grid>
      </header>
      <main></main>
    </div>
  );
}

export default App;
