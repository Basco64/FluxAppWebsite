import React from 'react'
import { Box, Container, Stack, Text, Button } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
            bg='#303030'
            color='white'
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                direction={{ base: 'column', md: 'row' }}
                spacing={5}
                justify={'space-between'}
                py={4}
            >
                <Stack spacing={6}>
                    <Text>For any suggestions/ideas, contact me on discord : Basco#6472 </Text>
                </Stack>
                <Stack spacing={6}>
                    <Button as="a"
                        href="https://runonflux.io/"
                        aria-label="RunOnFlux"
                        variant="link"
                        color='white'
                        target='_blank'
                    >RunOnFlux.io
                    </Button>
                </Stack>
                <Stack spacing={6}>
                    <Text >If you want tip me (Flux): t1LQe67UZDPAPFW6cQk5T1tnK7jtTe52vFW </Text>
                </Stack>
            </Container>
        </Box>
    )
}