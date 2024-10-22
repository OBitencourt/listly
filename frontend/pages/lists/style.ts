
import styled from "styled-components";

export const StyledButton = styled.button<{$isCancel: boolean}>`
    width: 100px;
    padding: 10px;
    background-color: lightgreen;
    display: block;
    margin-top: 20px;
    border-radius: .8em;
    border: none;
    transition: all 300ms ease;
    cursor: pointer;
    &:hover {
        background-color: green;
        color: white;
        transform: scale(1.05);
    }


    ${({ $isCancel }) => $isCancel ? `
        
        background-color: #fe5f5f;
        

        &:hover {
            color: white;
            background-color: red;
            
        }
    ` : `
        color: black;
        background-color: lightgreen;
        border: none;
        &:hover {
            background-color: green;
            color: white;
        }
    `}
`