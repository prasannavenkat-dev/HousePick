import React, { useState } from "react"

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
// import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import {GiPartyPopper} from "react-icons/gi"

export default function FindHome(props) {
  const [result, setResult] = useState([])
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);

    let arr = handleCalculate()

    setResult(arr)
  };

  const handleClose = () => {
    setOpen(false);
  };


  let { gym, teaShop, parking, market, restaurant, house, handleCalculate, resetAll } = props
  let submitCondition = gym && teaShop && parking && market && restaurant && house.length > 1


  return (
    <div>

      {
        submitCondition ? <Button variant="contained" style={{ width: "100%" }} color="secondary" onClick={handleClickOpen}>
          FIND HOME
        </Button> : <Button style={{ width: "100%" }} variant="contained" color="secondary" disabled>FIND HOME</Button>
      }
      <br />
      <br />

      <Button style={{ width: "100%" }} variant="outlined" color="secondary" onClick={() => { resetAll() }}>RESET ALL</Button>


      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{`We Found your ideal home!`}&nbsp;
        <GiPartyPopper size={28}/></DialogTitle>

        
        <DialogContent>
         
            {/* <StarIcon style={{color:"#F3BF2B"}} /> */}


            <Typography variant="h5" component="h2">
               House Name : {result[0]} <br/>
               Block No   : {result[1]} 
           
            </Typography>
             
          
            
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>

        </DialogActions>
      </Dialog>

    </div>
  )
}

























// import React from 'react'
// import Button from '@material-ui/core/Button';



// export default function FindHome(props) {


//   let { gym, teaShop, parking, market, restaurant, house, handleCalculate } = props
//   let submitCondition = gym && teaShop && parking && market && restaurant && house.length > 1


//   return (
//     <div>


//       {
//         submitCondition ?  <Button style={{width:"100%"}} variant="contained" color="secondary"  onClick={() => handleCalculate()}>Submit</Button>:  <Button style={{width:"100%"}} variant="contained" color="secondary"  disabled>Submit</Button>
//       }


//     </div>
//   )
// }

