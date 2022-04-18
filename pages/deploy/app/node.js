import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Code, Center, Heading, Stack } from '@chakra-ui/react'

export default function node() {
    return (
        <>
            <Head>
                <title>Dockerfile for Node App</title>
            </Head>
            <Link href="/deploy/app/" passHref scroll={false}>
                <CloseIcon m='1em' mr='2em' style={{ float: 'right', clear: 'both' }} _hover={{ 'cursor': 'pointer' }} /></Link>
            <Heading size='2xl' align='center' my='10' textDecoration='underline'>Dockerfile for NodeJs App</Heading>
            <Center>
                <Stack direction={{ base: 'columns', lg: 'row' }}>
                    <Box p='2' m='2'>
                        <Code>
                    /* first method  */<br /><br />
                            #stage 1<br />
                            FROM node:latest as node<br />
                            WORKDIR /app<br />
                            COPY . .<br />
                            RUN npm install<br />
                            RUN npm run build --prod<br />
                            <br />
                            #stage 2<br />
                            FROM nginx:alpine<br />
                            COPY --from=node /app/dist/WiinsWebDapp /usr/share/nginx/html<br />
                            CMD ["nginx", "-g", "daemon off;"]<br />
                        </Code>
                    </Box>
                    <Box p='2' m='2'>
                        <Code>
                            /* second method  */<br /><br />
                            FROM node:16-alpine3.11 as build-stage<br />
                            LABEL description="Appname"<br />
                            WORKDIR /app<br />
                            COPY package*.json ./<br />
                            RUN npm install<br />
                            COPY . .<br />
                            RUN npm run build<br />
                            <br />
                            <br />
                            FROM nginx:stable-alpine as production-stage<br />
                            COPY --from=build-stage /app/ /usr/share/nginx/html<br />
                            EXPOSE 80<br />
                            CMD ["nginx", "-g", "daemon off;"]<br />
                        </Code>
                    </Box>
                </Stack>
            </Center>
        </>
    )
}