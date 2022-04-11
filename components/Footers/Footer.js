import React from 'react'
import { Box, Container, Stack, Text, useColorModeValue, Link } from '@chakra-ui/react';


export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'space-evenly', md: 'space-evenly' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>For any suggestions/ideas, contact me on discord : Basco#6472 </Text>
                <Link href='https://runonflux.io/' isExternal>RunOnFlux.io</Link>
                <Text>If you want tip me (Flux): t1LQe67UZDPAPFW6cQk5T1tnK7jtTe52vFW </Text>
            </Container>
        </Box>
    )
}