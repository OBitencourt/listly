import React from 'react'
// import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            {/* Maybe a header? */}
            <Header />
            {children}
            <footer></footer>
        </>
    )
}

export default Default
