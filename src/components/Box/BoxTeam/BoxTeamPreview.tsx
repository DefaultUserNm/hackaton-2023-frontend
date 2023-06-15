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

import { TeamMember } from "../BoxPreview";

interface BoxTeamProps {
  leader?: string;
  members?: TeamMember[];
  title: string;
  total?: number;
}
export const BoxTeamPreview: FC<BoxTeamProps> = ({
  leader,
  members,
  title,
  total,
}) => {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h2" color="text.secondary">
            {title}
          </Typography>
          <Typography
            variant="h4"
            textAlign="left"
            component="div"
            gutterBottom
          >
            Лидер: {leader}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            textAlign="left"
            gutterBottom
          >
            Количество человек: {total}
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h4" component="div" textAlign="left">
                Состав:
              </Typography>
            </Grid>
            {members?.length &&
              members.map(({ lastName, firstName, id }) => (
                <Grid item key={id} style={{ display: "flex" }}>
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
        <CardActions>
          <Button size="small">Подробнее</Button>
        </CardActions>
      </Card>
    </Container>
  );
};
