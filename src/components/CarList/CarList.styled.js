import { styled } from "styled-components";

export const StyledList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 50px 30px;
list-style: none;
margin: 0 auto;
justify-content: center;
`

export const LoadMoreButton = styled.button`
display: block;
background: none;
outline: none;
border: none;
text-decoration: underline;
color: #3470ff;
font-size: 16px;
font-weight: 500;
cursor: pointer;
height: 24px;
margin: 0 auto;
margin-top: 100px;

&:hover{
    color: #0B44CD;
}
`

export const StyledWrapper = styled.section`
padding: 150px 128px;
margin: 0 auto;
`
