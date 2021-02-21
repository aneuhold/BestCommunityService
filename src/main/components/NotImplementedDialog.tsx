import {
  DialogContent,
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
} from '@material-ui/core';
import React from 'react';

export type NotImplementedDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

/**
 * To use this, add some state the component and then this componenet
 * anywhere at the bottom of the one it is being added to. For example the state
 * can be:
 *
 * ```
 * const [implementedDialogOpen, setImplementedDialogOpen] = useState(false);
 * ```
 *
 * Then the component could be added like:
 *
 * ```
 * <NotImplementedDialog
 *  open={implementedDialogOpen}
 *  setOpen={setImplementedDialogOpen}
 * />
 * ```
 *
 * Then anywhere it needs to be opened in some event handler, you can add
 * the function below:
 *
 * ```
 * () => {setImplementedDialogOpen(true)}
 * ```
 *
 * @param {NotImplementedDialogProps} props
 */
export default function NotImplementedDialog(
  props: NotImplementedDialogProps
): JSX.Element {
  const { open, setOpen } = props;
  function handleClose() {
    setOpen(false);
  }
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      onClose={handleClose}
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Not Yet Implemented</DialogTitle>
      <DialogContent>
        This feature is not implemented in the prototype
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
