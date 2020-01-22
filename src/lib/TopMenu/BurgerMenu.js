import React, { Link } from 'react'
import styled from 'styled-components/macro'

const SideMenu = styled.div`
display: flex;
flex-direction: column;
`
const Dash = styled.div`
border-radius: 2px;
background: #1C5453;
margin: 3px;
width: 20px;
height: 5px;
`

export const BurgerMenu = () => {
    return (
        <>
            <SideMenu>
                <Dash/>
                <Dash/>
                <Dash/>
            </SideMenu>
            
        </>

        
    )
   
}