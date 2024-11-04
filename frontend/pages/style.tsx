
import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledGrid = styled(Grid)<{ $isWhite: boolean, $isMinor: boolean}>`
    
    padding: 30px;
    color: white;

    ${({ $isWhite }) => $isWhite ? `
        background-color: white;
        height: 300px;
        border-radius: .7em;
        color: #FFA500;
    ` : `
        background-color: #FFA500;
        height: 500px;
        
    `}

    ${({ $isMinor }) => $isMinor ? `
        height: 450px
    ` : `
        height: 500px
    `}

   
`
export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`