
import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100px;
    padding: 10px;
    background-color: lightgreen;
    display: block;
    margin-top: 20px;
    border-radius: .8em;
    border: none;
    transition: all 200ms ease;
    cursor: pointer;
    &:hover {
        background-color: green;
        color: white;

    }
`