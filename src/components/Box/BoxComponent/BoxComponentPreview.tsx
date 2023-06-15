import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import * as React from "react";
import { FC } from "react";
import { ProductComponent } from "../BoxPreview";
import {
  Avatar,
  Container,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { BootstrapDialogTitle } from "../../BootstrapDialogTitle";

interface BoxComponentPreviewProps {
  productComponents?: ProductComponent[];
  total?: number;
  title: string;
}
export const BoxComponentPreview: FC<BoxComponentPreviewProps> = ({
  title,
  total,
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
            {title}
          </Typography>
          <Grid container spacing={2}>
            {productComponents?.length &&
              productComponents.map((productComponent) => (
                <Grid item key={productComponent.name}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleClickOpen}
                  >
                    {productComponent.name}
                  </Button>
                  <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <BootstrapDialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose}
                    >
                      Modal title
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </Typography>
                      <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </Typography>
                      <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Save changes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
