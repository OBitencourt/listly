
import React from 'react';
import { StyledButton, StyledHeader, StyledNav } from './style';

import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter()

    const handleNav = (path: string) => {
        router.push(path)
    }

    return (
       <>
            <StyledHeader>
                <StyledNav>
                    <StyledButton
                        $isActive={router.pathname === '/'}
                        onClick={() => handleNav('/')}
                    >
                        Home
                    </StyledButton>
                    <StyledButton
                        $isActive={router.pathname === '/lists'}
                        onClick={() => handleNav('/lists')}
                    >
                        Lists
                    </StyledButton>
                </StyledNav>
            </StyledHeader>
       </>
    )
}

export default Header