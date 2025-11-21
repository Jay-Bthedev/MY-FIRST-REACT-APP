// on click of a color card the page background changes

import React, { useState } from 'react'
import "./ColorChanger.css"

const ColorChanger = () => {

    const [currentColor, setCurrentColor] = useState("white");
    const arrayOfColors = ["lightblue", "orange", "blue", "yellow", "green", "purple", "brown", "gray"];

    const colorChangerFunction = (color) => {

        setCurrentColor(color);
        // document.body.style.background = color;

        
    }


  return (
      <div className='color-changer' style={{background: currentColor}}>
          
          <header>
              Click on any card to change the color
          </header>
          
          <div className='color-cards-wrapper'>
              {
                  arrayOfColors.map((color, index) => (
                      
                         <div className='color-card' style={{background: color}} onClick={()=>colorChangerFunction(color)} key={index}>
                  
                   </div>
                  ))
              }
{/*               
              <div className='color-card' style={{background: "lightblue"}} onClick={()=>colorChangerFunction("lightblue")}>
                  
              </div>


               <div className='color-card' style={{background: "pink"}} onClick={()=>colorChangerFunction("pink")}>
                  
              </div>


               <div className='color-card' style={{background: "red"}} onClick={()=>colorChangerFunction("red")}>
                  
              </div>


               <div className='color-card' style={{background: "orange"}} onClick={()=>colorChangerFunction("orange")}>
                  
              </div>

              <div className='color-card' style={{background:"blue"}} onClick={()=>colorChangerFunction("blue")}>
                  
              </div>
              <div className='color-card' style={{background: "yellow"}} onClick={()=>colorChangerFunction("yellow")}>
                  
              </div> */}


           
              
          </div>
          
    </div>
  )
}

export default ColorChanger