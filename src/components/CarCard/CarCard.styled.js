import { styled } from "styled-components";
import {ReactComponent as Favorites} from '../../images/icons/favorites.svg';


export const StyledCardWrapper = styled.div`
position: relative;
width: 274px;
`

export const StyledImageContainer = styled.div`

`

export const StyledImage = styled.img`
display: block;
border-radius: 14px;
max-width: 100%;
height: 268px;
object-fit: cover;

`

export const StyledTitle = styled.h3`
margin-top: 14px;
font-size: 16px;
display: flex;
justify-content: space-between;
`

export const BlackText = styled.span`
color: #121417;
`

export const BlueText = styled.span`
color: #3470ff;
`

export const StyledDescription = styled.p`
margin-top: 8px;
font-size: 12px;
font-weight: 400;
color: rgba(18, 20, 23, 0.5);
`

export const StyledButton = styled.button`
display: block;
margin-top: 28px;
width: 100%;
height: 44px;
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

export const StyledFavIcon = styled(Favorites)`
fill: ${props => props.$isfav ? '#3470FF' : 'black'}; /* Измените цвет иконки в зависимости от значения пропа $isfav */
width: 16px;
height: 16px;
&:hover{
    fill: currentColor;
    transform: scale(1.5);
}
`

export const StyledFavButton = styled.button`
position: absolute;
top: 16px;
right: 15px;
width: 16px;
height: 16px;
background: none;
outline: none;
border: none;
cursor: pointer;
&:hover{
    color: #3470FF;
}
`

