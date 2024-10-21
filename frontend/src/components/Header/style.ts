
import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledNav = styled.nav`
    border: 1px solid black;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    padding: 2px;
    border-radius: 50px / 60px;
    
`

export const StyledButton = styled.button<{$isActive: boolean}>`
    width: 50px;
    padding: 10px;
    background-color: white;
    border-radius: 50%;
    margin: 3px;
    
    cursor: pointer;
    transition: all 300ms ease-in-out;
    color: black;
    // display: flex;

    ${({ $isActive }) => $isActive ? `
        color: white;
        background-color: #5E6572;
        border: none;

        &:hover {
            color: white;
            background-color: #5E6572;
            border: 1px solid #4b484845;
        }
    ` : `
        color: black;
        background-color: white;
        border: none;
        &:hover {
            background-color: #A9B4C2;
            color: white;
        }
    `}

`