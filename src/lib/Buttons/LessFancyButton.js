import React from 'react'
import styled from 'styled-components'

export const LessFancyButton = () => {

  return (

    <Container>
      <Button>
        <Icon className="material-icons">language</Icon>
      </Button>
    </Container >
  )
}

//Change "language" above to whichever symbol you would like to use 
//from Material icons: https://material.io/resources/icons/?style=baseline


const Button = styled.button`
  border-radius: 50%;
  background-color: #aed2eb;
  padding: 0px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin: 200px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #cce1e6;
    cursor: pointer;
  }
`;

const Container = styled.div`
  height: 1000px;
  display: flex;
  justify-content: center;
`;

const Icon = styled.i`
  color: white;

`