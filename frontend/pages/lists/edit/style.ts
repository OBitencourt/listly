
import styled from "styled-components";

export const StyledBox = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 24px;
    padding: 20px;
    margin-bottom: 20px;
  
`

export const TasksWrapper = styled.div`
    height: 350px;
    background-color: #F59D0C;
    padding: 12px;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
`

export const EditListBox = styled.div`
    height: 100px;
    background-color: white;
    padding: 12px;
    border-radius: 13px;
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