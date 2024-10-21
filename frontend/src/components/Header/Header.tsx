
import React from 'react';
import { StyledButton, StyledHeader, StyledNav } from './style';

const Header = () => {

    return (
       <>
            <StyledHeader>
                <StyledNav>
                    <StyledButton>
                        Home
                    </StyledButton>
                    <StyledButton>
                        Lists
                    </StyledButton>
                </StyledNav>
            </StyledHeader>
       </>
    )
}

export default Header