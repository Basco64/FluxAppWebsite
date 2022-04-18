import React from 'react'
import NavBar from '../Navbar/Navbar'
import { Box, Image } from '@chakra-ui/react'

export default function Header() {

    return (
        <>
            <Box
                align='center'
                style={{ clear: 'both' }}
            >
                <Image
                    src='/FluxBanner.png'
                    alt="fluxBanner"
                    placeholder='blur'
                    width={{ base: "100%", lg: "840px" }}
                    height={{ base: "100%", lg: "385px" }}
                    borderRadius={'5em'}
                    boxShadow={'black 1em 1em 0.6em'}
                />
            </Box>
            <NavBar />
        </>
    )
}
