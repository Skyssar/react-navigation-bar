import Button from '@mui/material/Button';
import { TextField, FormControl, FormGroup, FormControlLabel, InputAdornment, Checkbox } from '@mui/material';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Grid } from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { useState } from 'react';

// import InfoTooltip from '../Atoms/InfoTooltip';

const useFormStyles = () => ({
   container: {
      '& .MuiFormControl-root': {
         marginRight: '4px', 
      },
      '& .MuiInputBase-input': {
         padding: '16px 14px !important', 
         background: 'red'     
      }
   }
})

function Home() {

   const styles = useFormStyles();

   const [ open, setOpen ] = useState(false);
   const [ project, setProject ] = useState({
      initialDate: ''
   })

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
               <Grid container spacing={2}>

                  {/* <LocalizationProvider dateAdapter={ AdapterDateFns }>
                     <Grid item xs={6} display="flex" alignItems="center">
                        <FormControl fullWidth>
                           <DatePicker 
                              label="For desktop"
                              value={ new Date("1993-05-01") }
                              minDate={new Date("1993-05-01")}
                              // onChange={(newValue) => {
                              //   setValue(newValue);
                              // }}
                              renderInput={(params) => <TextField {...params} />}
                           />
                        </FormControl>
                        <InfoTooltip text="Email"/>
                     </Grid>
                     <Grid item xs={6} display="flex" alignItems="center">
                        <FormControl fullWidth>
                           <TextField 
                              label="Fecha Final"
                              id="endDate"
                              type="text"
                              variant="outlined"
                              required
                           />
                        </FormControl>
                        <InfoTooltip text="Email"/>
                     </Grid>
                  </LocalizationProvider> */}
                     
                  <Grid item xs={12} display="flex" alignItems="center">
                     {/* <FormControl fullWidth> */}
                        <TextField fullWidth
                           label="Tiempo (Seg)"
                           id="time"
                           type="number"
                           variant="outlined"
                           required
                        />
                     {/* </FormControl> */}
                     {/* <InfoTooltip text="Email"/> */}
                  </Grid>
                  <Grid item xs={6} display="flex" alignItems="center">
                     <FormControl fullWidth>
                        <TextField 
                           label="Latitud"
                           id="latitude"
                           type="number"
                           variant="outlined"
                           InputProps={{
                              endAdornment: <InputAdornment> ° </InputAdornment>,
                           }}
                           required
                        />
                     </FormControl>
                     {/* <InfoTooltip text="Email"/> */}
                  </Grid>
                  <Grid item xs={6} display="flex" alignItems="center">
                     <FormControl fullWidth>
                        <TextField 
                           label="Longitud"
                           id="longitude"
                           type="number"
                           variant="outlined"
                           InputProps={{
                              endAdornment: <InputAdornment> ° </InputAdornment>,
                           }}
                           required
                        />
                     </FormControl>
                     {/* <InfoTooltip text="Email"/> */}
                  </Grid>
                  <Grid item xs={12} display="flex" alignItems="center">
                     <FormControl fullWidth>
                        <TextField 
                           label="Profundidad"
                           id="depth"
                           type="number"
                           variant="outlined"
                           InputProps={{
                              endAdornment: <InputAdornment> km </InputAdornment>,
                           }}
                           required
                        />
                     </FormControl>
                     {/* <InfoTooltip text="Email"/> */}
                  </Grid>
                  <Grid item xs={12} display="flex" alignItems="center">
                     <FormControl fullWidth>
                        <TextField 
                           label="Magnitud"
                           id="magnitude"
                           type="number"
                           variant="outlined"
                           InputProps={{
                              endAdornment: <InputAdornment></InputAdornment>,
                           }}
                           required
                        />
                     </FormControl>
                     {/* <InfoTooltip text="Email"/> */}
                  </Grid>
                  <Grid item xs={12} display="flex" alignItems="center">
                     <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Estación" id="station" />
                     </FormGroup>
                  </Grid>
               </Grid>

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