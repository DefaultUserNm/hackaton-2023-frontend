import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import * as React from "react";
import { FC, useMemo, useState } from "react";
import {
  Avatar,
  Container,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { BootstrapDialogTitle } from "../../BootstrapDialogTitle";
import { ProductComponent } from "../../../services/api";
import { blue } from "@mui/material/colors";

interface ProductComponentProps {
  productComponents: ProductComponent[];
}

export const BoxComponentPreview: FC<ProductComponentProps> = ({
  productComponents,
}) => {
  const [open, setOpen] = React.useState(false);
  const [activeComponent, setActiveComponent] = useState("");

  const handleClickOpen = (id: string) => () => {
    setOpen(true);
    setActiveComponent(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectedUser = useMemo(
    () => productComponents.find(({ name }) => name === activeComponent),
    [productComponents, activeComponent]);

  return (
    <Container maxWidth="xl">
      <Card>
        <CardContent>
          <Typography variant="h2" color="text.secondary">
            Компоненты
          </Typography>
          <Grid container spacing={2} justifyContent={"center"}>
            {productComponents?.length &&
              productComponents.map(({ name, ci, repoLink, stack }) => (
                <Grid item key={ci}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleClickOpen(name)}
                  >
                    {name}
                  </Button>
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
                      Компонент {selectedUser?.name}
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <List sx={{ pt: 0 }}>
                        <ListItem disableGutters>
                          <ListItemText primary={`КЭ: ${selectedUser?.ci}`} />
                        </ListItem>

                        <ListItem disableGutters>
                          <Link href={selectedUser?.repoLink}>Ссылка на репозиторий</Link>
                        </ListItem>

                        <ListItem disableGutters>
                          <ListItemText
                            primary={`Тех.Стек: ${JSON.stringify(selectedUser?.stack)}`}
                          />
                        </ListItem>
                      </List>
                    </DialogContent>
                  </Dialog>
                </Grid>
              ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
