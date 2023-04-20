import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import '../css/Buttons.css';
// import '../App.css';



export default function PopupFrom() {
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const [openThird, setOpenThird] = React.useState(false);


  // state for form data


  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contect1, setContect1] = React.useState();
  const [contect2, setContect2] = React.useState();
  const [aadhar, setAadhar] = React.useState();
  const [address, setAddress] = React.useState('');
  const [studentClass, setStudentClass] = React.useState('');
  const [previousMark, setPreviousMark] = React.useState();
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [zipCode, setZipeCode] = React.useState('');
  const [stage, setStage] = React.useState('');
  const [Board, setBoard] = React.useState('');
  const [medium, setMedium] = React.useState('');
  const [stream, setStream] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [source, setSource] = React.useState('');
  const [session, setSession] = React.useState('');
  const [fatherName, setFatherName] = React.useState('');
  const [fatherOccupation, setFatherOccupation] = React.useState('');
  const [mathorName, setMathorName] = React.useState('');
  const [mathorOccuption, setMathorOccupation] = React.useState('');
  const [parantContectNumber, setParantContectNumber] = React.useState('');



  const handleClickOpen = () => {
    setOpenFirst(true);
  };

  const handleAdd = () => {

    if (openFirst === true) {
      setOpenFirst(false);
      setOpenSecond(true);
      alert(firstName);
    }
    else if (openSecond === true) {
      setOpenSecond(false);
      setOpenThird(true);
    }
    else if (openThird === true) {
      setOpenThird(false);
    }
  };




  return (
    <div>
      <div style={{position:'absolute',bottom:15,right:15}}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </div>





      {/* student add student dailog box 1  */}

      <Dialog open={openFirst}  >
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>

          <Box sx={{ flexGrow: 1, padding: "10px" }}>
            <Grid container spacing={2} rowSpacing={3} columnSpacing={2}  >


              <Grid xs={6}>
                <TextField size={"small"} value={firstName} onChange={(event) => { setFirstName(event.target.value) }} label="First Name" variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={lastName} onChange={(event) => { setLastName(event.target.value) }} label="Last Name" variant="outlined" />

              </Grid>

              <Grid xs={6}>
                <TextField size={"small"} value={gender} onChange={(event) => { setGender(event.target.value) }} label="Gender" variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={email} onChange={(event) => { setEmail(event.target.value) }} label="email id" type='email' variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={contect1} onChange={(event) => { setContect1(event.target.value) }} label="Contect No 1" type='number' variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={contect2} onChange={(event) => { setContect2(event.target.value) }} label="Contect No 2" type='number' variant="outlined" />
              </Grid>


              <Grid xs={6} >
                <div style={{ width: '220px', margin: "0px", }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker slotProps={{ textField: { size: 'small', fullWidth: "true", } }} label="Date Of Birth" />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </Grid>



              <Grid xs={6}>
                <TextField size={"small"} value={aadhar} onChange={(event) => { setAadhar(event.target.value) }} label="Aadhar No." type='number' variant="outlined" />
              </Grid>
              <Grid xs={6}>

                <TextField size={"small"} value={studentClass} onChange={(event) => { setStudentClass(event.target.value) }} label="Class" variant="outlined" />

              </Grid>

              <Grid xs={12} md={11.4} mdOffset={0} >
                <TextField size={'small'} value={address} fullWidth={true} onChange={(event) => { setAddress(event.target.value) }} label="Address" variant="outlined" />
              </Grid>


              <Grid xs={6} md={6}>
                <TextField size={"small"} value={previousMark} onChange={(event) => { setPreviousMark(event.target.value) }} label="Previous class mark %" variant='outlined' />
              </Grid>



              <Grid xs={6}>
                <TextField size={"small"} value={country} onChange={(event) => { setCountry(event.target.value) }} label="Country" variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={state} onChange={(event) => { setState(event.target.value) }} label="State" variant="outlined" />

              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={city} onChange={(event) => { setCity(event.target.value) }} label="City" variant="outlined" />

              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={zipCode} onChange={(event) => { setZipeCode(event.target.value) }} label="Zip Code" variant="outlined" />
              </Grid>


              <Grid xs={6}>
                <TextField size={"small"} value={stage} onChange={(event) => { setStage(event.target.value) }} label="Stage" type='email' variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={Board} onChange={(event) => { setBoard(event.target.value) }} label="Board" type='number' variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={medium} onChange={(event) => { setMedium(event.target.value) }} label="Medium" type='number' variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={stream} onChange={(event) => { setStream(event.target.value) }} label="Stream" type='number' variant="outlined" />
              </Grid>
              <Grid xs={6} >
                <TextField value={school} onChange={(event) => { setSchool(event.target.value) }} size={'small'} label="School" variant="outlined" />
              </Grid>

              <Grid xs={6}>

                <TextField size={"small"} value={source} onChange={(event) => { setSource(event.target.value) }} label="Source" variant="outlined" />

              </Grid>

              <Grid xs={6} md={6}>
                <TextField size={"small"} value={session} onChange={(event) => { setSession(event.target.value) }} label="Session" variant='outlined' />
              </Grid>
              <Grid xs={6} md={6}>
                <TextField size={"small"} value={fatherName} onChange={(event) => { setFatherName(event.target.value) }} label="Father's Name" variant='outlined' />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={fatherOccupation} onChange={(event) => { setFatherOccupation(event.target.value) }} label="Father's occupation" variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={mathorName} onChange={(event) => { setMathorName(event.target.value) }} label="Mathor's Name" variant="outlined" />

              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={mathorOccuption} onChange={(event) => { setMathorOccupation(event.target.value) }} label="Mathor's occupation" variant="outlined" />

              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={parantContectNumber} onChange={(event) => { setParantContectNumber(event.target.value) }} label="Parent's Contact Number" variant="outlined" />
              </Grid>
              <Grid xs={6}>
                <TextField size={"small"} value={stage} onChange={(event) => { setStage(event.target.value) }} label="Upload photo" type='file' variant="outlined" />
              </Grid>




            </Grid>


          </Box>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} className='seconderyButton'>Cancel</Button> */}
          <Button onClick={handleAdd} style={{ margin: "10px", marginRight: '20px' }} className='seconderyButton'>Add</Button>
        </DialogActions>
      </Dialog>




    </div>
  );
}