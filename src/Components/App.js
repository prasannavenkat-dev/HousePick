import React, { useState, useEffect } from "react";
import Board from "./Board"
import "../css/app.css";
import Form from "./Form";
import FindHome from "./FindHome"
import calculate from "../Logic/appLogic.js"
import Navbar from "./Navbar"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import uuidv4 from "uuid/dist/v4";
function App() {
  const [board, setBoard] = useState([])
  const [block, setBlock] = useState('');
  const [typeAvail, setTypeAvail] = useState([`House`, "Gym", "Market", "Parking", "Tea Shop", "Restaurant"])
  const [selectedType, setSelectedType] = useState('')
  const [selectedName, setSelectedName] = useState('')
  const [selectedCoord, setSelectedCoord] = useState({
    x: "",
    y: ""
  })

  // const [selectedValue,setSelectedValue]= useState('')
  const [addType, setAddType] = useState('');
  const [addName, setAddName] = useState('');

  //VALUES OF GYM,MARKET,PARKING,TEASHOP,RESTAURANT

  const [gym, setGym] = useState('')
  const [teaShop, setTeaShop] = useState('')
  const [parking, setParking] = useState('')
  const [market, setMarket] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [house, setHouse] = useState([])


   //PROPS VALUES
  let values = { gym, teaShop, parking, market, restaurant, house }
  let formValues ={   board, block,typeAvail,addItem,handleType,handleName,selectedType,selectedName}


  //FUNCTION CREATING CELLS

  function createCell() {
    let arr1 = []
    let count = 0;

    for (let i = 0; i < 6; i++) {
      let arr2 = []
      for (let j = 0; j < 6; j++) {
        count++;
        arr2.push({
          value: count,
          x: i,
          y: j,
          type: "empty",
          name: "empty"

        })
      }
      arr1.push(arr2)
    }

    return arr1
  }

  //FUNCTION ONSELECT 

  function onSelect(x, y, board) {
    reset()
    let arr = board;
    let obj = arr[x][y]


    let value1 = obj.value
    setBlock(value1)
    setSelectedCoord({ x, y })

  }


  //FUNCTION TYPE HANDLER 

  function handleType(type) {

    setSelectedType(type)
  }

  //FUNCTION NAME HANDLER

  function handleName(name) {
    setSelectedName(name)
  }


  // FUNCTION ADD ITEM 

  function addItem(type, name, board, block) {

    setAddType(type);

    if (type !== 'House') {
      let arr = typeAvail
      arr = arr.filter(i => i !== type)
      setTypeAvail(arr)

      if (type === "Gym") {
        setGym(block)
      }
      if (type === "Parking") {
        setParking(block)
      }
      if (type === "Market") {
        setMarket(block)
      }
      if (type === "Tea Shop") {
        setTeaShop(block)
      }
      if (type === "Restaurant") {
        setRestaurant(block)
      }
    }
    else {
      setAddName(name);
      let arr = [...house]
      let arr1 = [name, block]
      arr.push(arr1)
      setHouse(arr)
    }



    let newBoard = board;

    newBoard[selectedCoord.x][selectedCoord.y].type = type;
    newBoard[selectedCoord.x][selectedCoord.y].name = name;

    setBoard(newBoard)
    reset()

  }

  //FUNCTION RESET

  function reset() {
    setSelectedName('')
    setSelectedType('')
    setBlock('')

    setAddType('')
    setAddName('')
  }


  //HANDLE CALCULATE

  function handleCalculate() {
    let arr = calculate(gym, teaShop, parking, market, restaurant, house)

  
    return arr
  }


  //FUNCTION RESET ALL

  function resetAll() {
    reset()
    setTypeAvail(["House", "Gym", "Market", "Parking", "Tea Shop", "Restaurant"])
    setGym('')
    setTeaShop('')
    setParking('')
    setMarket('')
    setRestaurant('')
    setHouse('')
    let newArr = createCell()
    setBoard(newArr)
  }

//CREATING CELL
  useEffect(() => {
    let arr = createCell()
    setBoard(arr)
  }, [])


  return (
    <>
      <Navbar key={uuidv4()} />

      <div className="content">
        <div className="myGrid" >
          <Board key={uuidv4()} board={board} onSelect={onSelect} block={block} addType={addType} addName={addName} reset={reset} />
          <div>
            <Card key={uuidv4()}>
              <CardHeader


                title="ENTER DETAILS"
              // subheader="September 14, 2016"
              />

              <CardContent>
                <Form key={uuidv4()} {...formValues}/>
                <br />
                <FindHome key={uuidv4()} resetAll={resetAll} {...values} handleCalculate={handleCalculate} />
              </CardContent>


            </Card>
          </div>

        </div>
      </div>



    </>
  );
}

export default App;






