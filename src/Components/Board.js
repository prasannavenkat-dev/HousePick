import React from 'react'
import Typography from '@material-ui/core/Typography';
import { IoHomeSharp, IoRestaurant } from "react-icons/io5"
import { FaDumbbell, FaCoffee } from "react-icons/fa"
import { RiShoppingBasketFill, RiParkingFill } from "react-icons/ri";



export default function Board(props) {
  let { board, onSelect, block, addType, addName, reset } = props
  let arr = board



  return (
    <div className="board">
      {arr.map(row => {
        return row.map(e => {


          return (

            block === e.value ?
              <div style={{ justifyContent: "center", alignItems: "center" }} onClick={() => onSelect(e.x, e.y, board)} onContextMenu={(evt) => {
                evt.preventDefault();
                reset()
              }}>
                {addName ?
                 <Typography variant="subtitle1" component="h2">{addName}</Typography> 
                 :
                  <Typography variant="subtitle1" component="h2">{addType}</Typography>}
              </div>

              :

              <div onClick={() => onSelect(e.x, e.y, board)} onContextMenu={(evt) => { evt.preventDefault(); reset() }}>
               

                {e.type === "House" ?

                 <Typography variant="subtitle1" component="h2" style={{ color: "black" }}>

                   <IoHomeSharp /> <br /> {e.name}

                   </Typography> 

                   :

                  (e.type === "empty" ?
                   <Typography variant="subtitle1" component="h2">{e.value}</Typography> 
                   :
                    <Typography variant="subtitle1" component="h2" style={{ color: "black" }}>
                    
                    
                  {
                    (e.type === 'Gym') ? <FaDumbbell />:
                    (e.type === 'Tea Shop') ? <FaCoffee />:
                    (e.type === 'Restaurant') ? <IoRestaurant />:
                    (e.type === 'Market') ? <RiShoppingBasketFill />:
                    (e.type === 'Parking') ? <RiParkingFill />:null
                    
                  }
 
                    <br />{e.type}
                    
                    </Typography>)}


              </div>
          )
        })


      }

      )}
    </div>
  )
}

