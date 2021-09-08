import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function PaletteMetaForm(props) {
  const [newPaletteName, setNewPaletteName] = useState("");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [props.palettes]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { hideForm, handleSubmit } = props;


  return (
    <Dialog
      open={open}
      onClose={hideForm}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette. Make sure it's unique!
          </DialogContentText>
          <Picker />

          <TextValidator
            label="Palette Name"
            value={newPaletteName}
            name="newPaletteName"
            onChange={(e) => setNewPaletteName(e.target.value)}
            fullWidth
            margin="normal"
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={["Enter Palette Name", "Name already used"]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
export default PaletteMetaForm;
