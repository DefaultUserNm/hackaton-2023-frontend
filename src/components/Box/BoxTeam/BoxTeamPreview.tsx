import React, { FC, useMemo } from "react";
import {
  Card,
  CardActions,
  Container,
  CardContent,
  Typography,
  Button,
  Avatar,
  Grid,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Link,
  Dialog,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

import { Team } from "../../../services/api";
import { BootstrapDialogTitle } from "../../BootstrapDialogTitle";

export const BoxTeamPreview: FC<Team> = ({ name, users }) => {
  const [open, setOpen] = React.useState(false);
  const [activeUser, setActiveUser] = React.useState("");

  const handleClickOpen = (id: string) => () => {
    setOpen(true);
    setActiveUser(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getFirstSymbol = (text: string) => {
    if (!text) {
      return "";
    }
    return text.slice(0, 1);
  };

  const selectedUser = useMemo(
    () => users.find(({ login }) => login === activeUser),
    [users, activeUser]
  );
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
              users.map(
                ({ login, lastName, firstName, middleName, phone, email }) => (
                  <Grid item key={login} style={{ display: "flex" }}>
                    <div onClick={handleClickOpen(login)}>
                      <Avatar
                        sx={{ bgcolor: deepOrange[500], width: 64, height: 64 }}
                      >
                        {getFirstSymbol(lastName)}
                        {getFirstSymbol(firstName)}
                      </Avatar>
                    </div>
                  </Grid>
                )
              )}
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              fullWidth
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Карточка сотрудника
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <List sx={{ pt: 0 }}>
                  <ListItem disableGutters>
                    <ListItemText
                      primary={`Фамилия: ${selectedUser?.lastName}`}
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemText primary={`Имя: ${selectedUser?.firstName}`} />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemText
                      primary={`Отчество: ${selectedUser?.middleName}`}
                    />
                  </ListItem>

                  <ListItem disableGutters>
                    <ListItemText
                      primary={`Номер телефона: ${selectedUser?.phone}`}
                    />
                  </ListItem>

                  <ListItem disableGutters>
                    <ListItemText primary={`Почта: ${selectedUser?.email}`} />
                  </ListItem>
                </List>
              </DialogContent>
            </Dialog>
          </Grid>
        </CardContent>
        {/*<CardActions>*/}
        {/*  <Button size="small">Подробнее</Button>*/}
        {/*</CardActions>*/}
      </Card>
    </Container>
  );
};
