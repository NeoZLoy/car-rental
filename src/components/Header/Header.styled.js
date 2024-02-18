import { styled } from "styled-components";
import {ReactComponent as Logo} from '../../images/icons/logo.svg';
import { NavLink } from "react-router-dom";


export const StyledLogo = styled(Logo)`
width: 30px;
height: 30px;
margin-left: 5px;
margin-right: 5px;
`

export const StyledLogoWrapper = styled.div`
display: flex;`

export const LogoText = styled.span`
`

export const StyledLink = styled(NavLink)`
display: flex;
align-items: center;
margin-right: 20px;
text-decoration: none;
font-weight: 500;
cursor: pointer;
text-transform: uppercase;
color: #3470FF;

&:hover{
    color: #0B44CD;
}
`

export const StyledList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
`

export const StyledNav = styled.nav`
margin-top: 24px;
`