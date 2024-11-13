
import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: #F59D0C;
    border-radius: 12px;
    font-family: 'Inria Sans';
    padding: 12px;
    border: none;
    color: white;
    width: 127px;
    font-size: 17px;
    font-weight: 300;
    cursor: pointer;
    transition:  all 350ms ease;
    margin-top: 20px;


    &:hover{
        transform: scale(1.05);
        background-color: #EB960A;
    }
`

export const StyledListButton = styled.button`
    background-color: #F59D0C;
    border-radius: 12px;
    font-family: 'Inria Sans';
    padding: 12px;
    border: none;
    color: white;
    width: 135px;
    font-size: 17px;
    font-weight: 300;
    cursor: pointer;
    transition:  all 350ms ease;
    margin-top: 20px;
    

    &:hover{
        transform: scale(1.05);
        background-color: #EB960A;
    }
`

export const StyledConfirmButton = styled.button`

    background-color: #F59D0C;
    border-radius: 12px;
    font-family: 'Inria Sans';
    padding: 10px;
    border: none;
    color: white;
    width: 127px;
    font-size: 15px;
    font-weight: 300;
    cursor: pointer;
    transition:  all 350ms ease;
    margin-top: 20px;


    &:hover{
        transform: scale(1.05);
        background-color: #EB960A;
    }
`

export const StyledCancelButton = styled.button`

    background-color: white;
    border-radius: 12px;
    font-family: 'Inria Sans';
    padding: 10px;
    border: 1px solid #F59D0C;
    color: #F59D0C;
    width: 127px;
    font-size: 15px;
    font-weight: 300;
    cursor: pointer;
    transition:  all 350ms ease;
    margin-top: 20px;


    &:hover{
        transform: scale(1.05);
        
    }
`