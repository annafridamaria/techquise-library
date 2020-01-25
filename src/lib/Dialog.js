import React from "react";
import styled from "styled-components/macro";

const Bg = styled.div`
  display: flex;
  height: 600px;
  background-color: lightgrey;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

const Container = styled.div`
  width: 560px;
  height: 182px;
  padding: 24px 24px 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: left;
`;

const Message = styled.p`
  text-align: left;
  color: black;
  line-height: 1.5em;
`;

const Button = styled.button`
  margin: 8px;
  height: 35px;
  width: 90px;
  border: none;
  color: purple;
  font-weight: bold;
  font-size: 14px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Dialog = ({ title, message }) => {
    return (
        <Bg>
            <Container>
                {title && <Title>{title}</Title>}
                <Message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim.
        </Message>
                <BtnWrap>
                    <Button>ACTION 1</Button>
                    <Button>ACTION 2</Button>
                </BtnWrap>
            </Container>
        </Bg>
    );
};
