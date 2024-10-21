import React from 'react'
// import Footer from '../components/Footer/Footer'

interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            {/* Maybe a header? */}
            {children}
            <footer></footer>
        </>
    )
}

export default Default
