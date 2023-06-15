import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import * as React from "react";
import { FC } from "react";
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
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
                    onClick={handleClickOpen}
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
                      Компонент {name}
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <List sx={{ pt: 0 }}>
                        <ListItem disableGutters>
                          <ListItemText primary={`КЭ: ${ci}`} />
                        </ListItem>

                        <ListItem disableGutters>
                          <Link href={repoLink}>Ссылка на репозиторий</Link>
                        </ListItem>

                        <ListItem disableGutters>
                          <ListItemText primary={`Тех.Стек: ${JSON.stringify(stack)}`} />
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
