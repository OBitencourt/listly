
import styled from "styled-components";

export const StyledBox = styled.div<{$isBig: boolean}>`
    width: 100%;
    background-color: white;
    border-radius: .8em;
    padding: 20px;
    margin-bottom: 20px;
    

    ${({ $isBig }) => $isBig ? `
        height: 450px;
    ` : `
        height: 200px;
    `}
`

export const TasksWrapper = styled.div`
    height: 350px;
    background-color: aliceblue;
    padding: 15px;
    border-radius: .5em;
`

export const StyledButton = styled.button`
    width: 150px;
    background: lightgreen;
    padding: 10px;
    border: none;
    color: black;
    margin-top: 30px;
    border-radius: .7em;
    cursor: pointer;
    transition: all 300ms ease;
    &:hover {
        background-color: green;
        transform: scale(1.05);
        color: white;
    }
`