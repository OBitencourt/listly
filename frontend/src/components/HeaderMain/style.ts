import styled from "styled-components";

export const StyledHeader = styled.header`

    width: 100%;
    height: 70px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
`

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const StyledButton = styled.button`

    background-color: #F59D0C;
    border-radius: 12px;
    font-family: 'Inria Sans';
    padding: 15px;
    border: none;
    color: white;
    width: 100px;
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
    transition:  all 350ms ease;
    cursor: pointer;

    &:hover{
        border: 1px solid #F59D0C;
        background-color: white;
        color: #F59D0C;
    }
`

export const NormalButton = styled.button`
    background-color: transparent;
    font-family: 'Inria Sans';
    padding: 15px;
    border: none;
    color: #989090;
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
    transition: all 150ms ease;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`