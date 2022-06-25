import React from 'react'
import { Box, Container, Stack, Text, Button, Flex } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Flex
            w="full"
            as="footer"
            flexDir={{ sm: "column", md: "row" }}
            py={{ sm: "2", md: "3", lg: "4" }}
            px={{ sm: "5", md: "3", lg: "0" }}
            bg='#303030'
            color='white'
            align="center"
            justify="center"
        >
            <Stack >
                <Text>For any suggestions/ideas, contact me on discord : Basco#6472 </Text>
            </Stack>
            <Stack>
                <Button as="a"
                    href="https://runonflux.io/"
                    aria-label="RunOnFlux"
                    variant="link"
                    color='white'
                    target='_blank'
                >RunOnFlux.io
                </Button>
            </Stack>
            <Stack>
                <Text >If you want tip me (Flux): t1LQe67UZDPAPFW6cQk5T1tnK7jtTe52vFW </Text>
            </Stack>
        </Flex>
    )
}