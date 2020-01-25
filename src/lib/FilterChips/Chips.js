import React from 'react'
import styled from "styled-components/macro"
import { useState } from "react"


//I'm declaring this here with let just so that I can have two 
//different stylings depending on whether the chip is clicked/chosen 
//or not.
let Chip = styled.button`
`

export const Chips = ({ title, className }) => {
  //The chips are not clicked to start with
  const [isClicked, setIsClicked] = useState(false)

  //This function checks if the chips are clicked or not and reverses
  //the value
  const toggleClicked = () => {
    if (isClicked === false) {
      setIsClicked(true)
    } else if (isClicked === true) {
      setIsClicked(false)
    }

  }

  //If a chip is clicked, it should have this styling, with a darker
  //grey as background-color and black as text-color
  if (isClicked === true) {
    Chip = styled.button`
    display: inline-flex;
    background: grey;
    color: black;
    font-size: 14px;
    border: none;
    border-radius: 15px;
    padding: 5px 10px;
    margin: 5px;
    `
  }

  //If a chip is un-clicked, it should have this styling, with a lighter
  //grey as background-color and grey as text-color instead of black
  else if (isClicked === false) {
    Chip = styled.button`
      display: inline-flex;
      background: #f1f1f1;
      color: #707070;
      font-size: 14px;
      border: none;
      border-radius: 15px;
      padding: 5px 10px;
      margin: 5px;
      `
  }

  return (
    <Chip
      type="button"
      onClick={() => toggleClicked()}>
      {title}
    </ Chip>
  )
}