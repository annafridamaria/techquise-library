import React from 'react'
import styled from 'styled-components/macro'
import { More } from 'lib/TopMenu/MoreMenu'
import { BurgerMenu } from 'lib/TopMenu/BurgerMenu'
import { Heart } from 'lib/TopMenu/HeartIcon'

const Bar = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #40BFAE;
padding: 5px 10px;
margin-top: 0px;
height: 50px;
width: 100%;
`

const Left = styled.div`
display: flex;
flex-direction: row;

`
const Center = styled.div`
display: flex;
flex-direction: row;

`
const Right = styled.div`
display: flex;
flex-direction: row;
`

export const TopMenu = ({ title, link }) => {
    return (
        <>
            <Bar>
                <Left>
                    <BurgerMenu />
                </Left>
                <Center>
                    {title}
                </Center>
                <Right>
                    <Heart /> 
                    <More/>                   
                </Right>
            </Bar>
        </>

        
    )
   
}