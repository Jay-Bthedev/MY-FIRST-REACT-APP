import React, { useState } from 'react'
import "./CounterGame.css"
const CounterGame = () => {
    const [number, setNumber] = useState(0);
    const [status, setStatus] = useState("Active");


    const incrementFunction = () => { 
      
        if (number < 10) {
            
       
            setNumber(number + 1);
        } else {
            alert("Maximum limit reached");
            setStatus("Highest")
             }


    }

    const decrementFunction = () => { 
        if (number > 0) { 
            setNumber(number - 1);

        } else {
            alert("Minimum limit reached");
            setStatus("Lowest")
        }
    }



  return (
      <div className='counter-game'>
          
          <header>
              <h3>Counter Game</h3>
              <p>Click on the buttons to increase or decrease the counter</p>
              <p>Status: {status}</p>
          </header>
          
          <div className='counter-display' style={{background: number === 0 ? "red" : number === 10 ? "lightgreen" : "white"}}>
              {number}
          </div>
          

          <div className='button-wrapper'>
              
              <button onClick={incrementFunction} className='increment'>Increment</button>
              <button onClick={decrementFunction} className='decrement'>Decrement</button>
              
          </div>



    </div>
  )
}

export default CounterGame