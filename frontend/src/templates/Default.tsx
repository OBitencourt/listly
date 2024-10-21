import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FloatingBubbles from '../components/Bubbles';


interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            {/* Maybe a header? */}
            <Header />
            {children}
            <FloatingBubbles />
            <Footer />
        </>
    )
}

export default Default
