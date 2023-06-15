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

import {Team, User} from "../../../services/api";

export const BoxTeamPreview: FC<Team> = ({
  // leader,
  // members,
  // title,
  // total,
   name,
   users
}) => {

  return (
    <Container>
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
            {users?.length &&
                users.map(({ login, lastName, firstName }) => (
                <Grid item key={login} style={{ display: "flex" }}>
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 64, height: 64 }}
                  >
                    {lastName[0]}
                    {firstName[0]}
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
