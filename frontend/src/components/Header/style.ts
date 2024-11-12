
import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    
`

export const StyledNav = styled.nav`
    border: 1px solid white;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    padding: 2px;
    border-radius: 50px / 50px;
    
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
        color: #FFA500;
        background-color: white;
        border: none;

        &:hover {
            filter: brightness(0.9)
        }
    ` : `
        color: white;
        background-color: transparent;
        border: none;
        &:hover {
            background-color: #f4e7e7;
            color: #f7ba48;
        }
    `}

`