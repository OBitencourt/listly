
import styled from "styled-components";

export const StyledBox = styled.div<{$isBig: boolean}>`
    width: 100%;
    background-color: white;
    border-radius: .8em;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 7px gray;

    ${({ $isBig }) => $isBig ? `
        
    ` : `
        height: 200px;
    `}
`

export const TasksWrapper = styled.div`
    height: 350px;
    background-color: aliceblue;
    padding: 15px;
    border-radius: .4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
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