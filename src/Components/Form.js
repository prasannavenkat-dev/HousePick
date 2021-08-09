import React from "react"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { IoHomeSharp, IoRestaurant } from "react-icons/io5"
import { FaDumbbell, FaCoffee } from "react-icons/fa"
import { RiShoppingBasketFill, RiParkingFill } from "react-icons/ri";
import uuidv4 from "uuid/dist/v4";

export default function Form(props) {

    let {
        block,
        typeAvail,
        handleName,
        handleType,
        selectedName,
        selectedType,
        addItem,
        board } = props


    return (
        <div className="form">
              <br />
    
            <TextField
          id="standard-read-only-input"
          label="Block No"
          defaultValue=""
          value={block}
          InputProps={{
            readOnly: true,
          }}
        />
            <br />
                    
            {
               
             block ?

            <TextField
             id="outlined-select-currency" 
             select 
             label="Type"
             value={selectedType}
             onChange={(e) => handleType(e.target.value)}
             helperText="Please select the type of Building"
             >
                {typeAvail.map((e) => (
                            <MenuItem key={e} value={e}>

                                {
                         (e==="House")?<IoHomeSharp />:
                         (e === 'Gym') ? <FaDumbbell />:
                         (e === 'Tea Shop') ? <FaCoffee />:
                         (e === 'Restaurant') ? <IoRestaurant />:
                         (e === 'Market') ? <RiShoppingBasketFill />:
                         (e === 'Parking') ? <RiParkingFill />:null
                                } &nbsp;&nbsp;{e}
                            </MenuItem>

                        ))}

            </TextField>
            :
            <TextField 
                    id="outlined-select-currency"
                     select 
                     label="Type"
                     value={selectedType}
                     helperText="Please select the type of Building"
                     disabled
                    >

             </TextField>


            }


            <br />
         
            {
                (selectedType === 'House' && block) &&
                <TextField key={uuidv4()} id="standard-search"
                 label="House Name"
                 type="search"  
                 helperText="Please enter house name"  
                 value={selectedName} 
                 autoFocus
                  onChange={(e) => handleName(e.target.value)} />

            }
            <br />
 
            {selectedType !== "House" ?

                (selectedType ? 
                <Button variant="contained" color="primary" onClick={() => { addItem(selectedType, selectedName, board, block) }}>Add Item</Button> 
                : <Button variant="contained" color="primary" >Add Item</Button>):

                (selectedName ? <Button variant="contained" color="primary" onClick={() => { addItem(selectedType, selectedName, board, block) }}>Add Item</Button> :<Button variant="contained" color="primary" disabled >Add Item</Button>)
            }
     

        </div>
    )
}



