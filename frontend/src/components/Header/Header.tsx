
import React from 'react';
import { StyledButton, StyledHeader, StyledNav } from './style';

import { useRouter } from 'next/router';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';

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

                        <HomeIcon />
                        
                    </StyledButton>
                    <StyledButton
                        $isActive={router.pathname === '/lists'}
                        onClick={() => handleNav('/lists')}
                    >
                        
                        <FormatListBulletedIcon />
                    </StyledButton>
                </StyledNav>
            </StyledHeader>
       </>
    )
}

export default Header