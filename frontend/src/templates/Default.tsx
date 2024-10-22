import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            {/* Maybe a header? */}
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default
