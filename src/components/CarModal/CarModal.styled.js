import { styled } from "styled-components";
import {ReactComponent as CloseSvg} from '../../images/icons/close.svg';


export const StyledImage = styled.img`
border-radius: 14px;
width: 461px;
`

export const StyledDescription = styled.p`
margin-top: 8px;
font-size: 12px;
font-weight: 400;
color: rgba(18, 20, 23, 0.5);
`

export const StyledTitleWrapper = styled.div`
/* width: 277px; */
`

export const CarDescription = styled.p`
font-weight: 400;
font-size: 14px;
margin-top: 14px;
`

export const StyledSubtitle = styled.h4`
font-weight: 500;
font-size: 14px;
font-style: normal;
margin-top: 24px;
`

export const StyledAcc= styled.div`
margin-top: 8px;
font-size: 11px;
font-weight: 400;
color: rgba(18, 20, 23, 0.5);
`

export const StyledAccList = styled.ul`
display: flex;
gap: 12px;
justify-content: flex-start;
`

export const StyledAccItem = styled.li`
/* width: 100% */
`
export const StyledConditionItem = styled.li`
border-radius: 35px;
padding: 7px 14px;
background-color: #f9f9f9;
font-size: 12px;

`

export const StyledConditionSpan = styled.span`
font-weight: 600;
font-size: 12px;
color: #3470FF;
`

export const StyledConditionList = styled.ul`
display: flex;
gap: 8px;
`

export const StyledButton = styled.a`
display: inline-block;
margin-top: 24px;
border-radius: 12px;
color: #fff;
font-size: 14px;
font-weight: 600;
background-color: #3470ff;
text-decoration: none;
padding: 12px 50px;

&:hover{
    background-color: #0b44cd;
}
`

export const CloseButton = styled.button`
position: absolute;
top: 16px;
right: 16px;
background: none;
outline: none;
border:none;
cursor: pointer;
`

export const CloseIcon = styled(CloseSvg)`
&:hover{
    stroke: #fff112;
}
`