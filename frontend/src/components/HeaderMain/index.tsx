import Image from "next/image"
import { Navbar, NormalButton, StyledButton, StyledHeader } from "./style"


const HeaderMain = () => {

    return (
        <>
            <StyledHeader>

                <Image 
                    width={55}
                    height={55}
                    src='/images/orange-list.png'
                    alt="logo"
                    style={{
                        marginTop: '5px'
                    }}
                />

                <Navbar>
                    <NormalButton>
                        Como usar?
                    </NormalButton>
                    <NormalButton>
                        Contatos
                    </NormalButton>
                    <StyledButton>
                        Login
                    </StyledButton>
                    <StyledButton>
                        Sign in
                    </StyledButton>
                </Navbar>
            </StyledHeader>
        </>
    )
}

export default HeaderMain