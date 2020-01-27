import React from 'react'
import styled from 'styled-components'


export const FancyButton = () => {

  return (
    <ButtonDiv>
      < button class="mdc-fab" aria-label="Favorite" >
        <div class="mdc-fab__ripple"></div>
        <span class="mdc-fab__icon material-icons">favorite</span>
      </button >
    </ButtonDiv>
  )
}

//Intructions from design system Material Design:
// https://material.io/develop/web/components/buttons/floating-action-buttons/
//and:
//https://material.io/develop/web/docs/getting-started/

const ButtonDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`