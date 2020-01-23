import React from 'react'
import styled from "styled-components/macro"

import { Chips } from "./Chips"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px;
`

const Card = styled.div`
background: white;
height: 200px;
`

const HeaderBar = styled.div`
background: #4B00D5;
color: #ffffff;
width: 400px;
padding: 10px 20px;
box-shadow: 0px 8px 4px -4px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.14), 0px 4px 12px 0px rgba(0,0,0,.12);
`

const Heading = styled.h1`
font-size: 20px;
`

const ChipContainer = styled.div`
margin: 20px;
width: 400px;
flex-wrap: wrap;
`

export const ChipsCard = () => {
  return (
    <Container>
      <Card>
        <HeaderBar>
          <Heading>
            Filter results
          </Heading>
        </HeaderBar>
        <ChipContainer>
          <Chips title="Elevator"></Chips>
          <Chips title="✓ Washer / Dryer"></Chips>
          <Chips title="Fireplace"></Chips>
          <Chips title="Wheelchair access"></Chips>
          <Chips title="✓ Dogs ok"></Chips>
          <Chips title="Cats ok"></Chips>
        </ChipContainer>
      </Card>
    </Container>
  )
}
