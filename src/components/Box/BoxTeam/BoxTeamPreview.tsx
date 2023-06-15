import React, { FC } from "react";
import {
  Card,
  CardActions,
  Container,
  CardContent,
  Typography,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

import { Team } from "../../../services/api";

export const BoxTeamPreview: FC<Team> = ({ name, users }) => {
  console.log({ users });
  const getFirstSymbol = (text: string) => {
    if (!text) {
      return '';
    }
    return text.slice(0, 1);
  }
  return (
    <Container maxWidth="xl">
      <Card>
        <CardContent>
          <Typography variant="h2" color="text.secondary">
            Команда
          </Typography>
          <Typography
            variant="h4"
            textAlign="left"
            component="div"
            gutterBottom
          >
            Название: {name}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            textAlign="left"
            gutterBottom
          >
            Количество сотрудников: {users.length}
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h4" component="div" textAlign="left">
                Состав:
              </Typography>
            </Grid>
            {users?.length > 0 &&
              users.map(({ login, lastName, firstName }) => (
                <Grid item key={login} style={{ display: "flex" }}>
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 64, height: 64 }}
                  >
                    {getFirstSymbol(lastName)}
                    {/*{lastName[0]}*/}
                    {getFirstSymbol(firstName)}
                  </Avatar>
                </Grid>
              ))}
          </Grid>
        </CardContent>
        {/*<CardActions>*/}
        {/*  <Button size="small">Подробнее</Button>*/}
        {/*</CardActions>*/}
      </Card>
    </Container>
  );
};
