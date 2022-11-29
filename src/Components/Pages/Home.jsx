import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';

import { useState } from 'react';


function Home() {

   const [ open, setOpen ] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   }

   const handleClose = () => {
      setOpen(false);
   }

   return (
      <>
         <Button size="small" variant="outlined" color="primary" onClick={ handleClickOpen }>
            Nueva tarea de asociación
         </Button>
         <Dialog open={ open } onClose={ handleClose }>

            <DialogTitle>Nueva tarea de asociación</DialogTitle>

            <DialogContent dividers>
               <DialogContentText >
                  Hello dumb
               </DialogContentText>
            </DialogContent>

            <DialogActions>
               <Button onClick={ handleClose } size="small" variant="contained" color="primary">Cancelar</Button>
               <Button onClick={ handleClose } startIcon={ <SaveIcon /> } size="small" variant="contained" color="primary">Guardar</Button>
            </DialogActions>

         </Dialog>
      </>
   )
}

export default Home;