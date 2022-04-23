import { sum } from "./calc";

import "./index.css"

import React from "react"
import ReactDom from "react-dom"

console.log(sum( 10,20))

var root = document.querySelector(".root")

// const p = React.createElement("p", {} , "HEllow REact 2 !")

// const image = React.createElement("img" , {src : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", className : "image"})

// const h1 = React.createElement("h1" ,
// {class : "red"}, 
// "HELLO REACT!",
// p,
// image)

ReactDom.render(
     <div>
         <h1>HELLO REACT with babel</h1>
         <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"></img>
     </div>,
     root
)