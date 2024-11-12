import React from 'react'

import Footer from '../components/Footer/Footer'
import HeaderMain from '../components/HeaderMain';


interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            <HeaderMain />
            {children}
            <Footer />
        </>
    )
}

export default Default
