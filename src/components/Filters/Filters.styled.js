import { styled } from "styled-components"

export const StyledButton = styled.button`
display: block;
margin-top: 28px;
width: 136px;
height: 48px;
outline: none;
border: none;
border-radius: 12px;
background-color: #3470ff;
cursor: pointer;
font-size: 14px;
color: #fff;
font-weight: 600;

&:hover{
    background-color: #0b44cd; 
}
`

export const StyledWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
gap: 18px
`