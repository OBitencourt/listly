
import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledGrid = styled(Grid)`
    
    padding: 30px;
    color: white;

`
export const StyledButton = styled.button`

    background-color: #F59D0C;
    border-radius: 12px;
    font-family: 'Inria Sans';
    padding: 15px;
    border: none;
    color: white;
    width: 182px;
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
    transition:  all 350ms ease;


    &:hover{
        transform: scale(1.05);
        background-color: #EB960A;
    }
`