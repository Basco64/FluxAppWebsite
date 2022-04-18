import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Code, Center, Heading } from '@chakra-ui/react'

export default function next() {
    return (
        <>
            <Head>
                <title>Dockerfile for NextJS App</title>
            </Head>
            <Link href="/deploy/app/" passHref scroll={false}>
                <CloseIcon m='1em' mr='2em' style={{ float: 'right', clear: 'both' }} _hover={{ 'cursor': 'pointer' }} /></Link>
            <Heading size='2xl' align='center' my='10' textDecoration='underline'>Dockerfile for NextJS App</Heading>
            <Center>
                <Box p='2' m='5'>
                    <Code>
                        FROM node:16-alpine AS deps <br />
                        RUN apk add --no-cache libc6-compat<br />
                        WORKDIR /app<br />
                        COPY package.json package-lock.json ./<br />
                        RUN npm ci<br />
                        <br />
                        FROM node:16-alpine AS builder<br />
                        WORKDIR /app<br />
                        COPY --from=deps /app/node_modules ./node_modules<br />
                        COPY . .<br />
                        <br />
                        RUN npm run build<br />
                        <br />
                        <br />
                        FROM node:16-alpine AS runner<br />
                        WORKDIR /app<br />
                        <br />
                        ENV NODE_ENV production<br />
                        <br />
                        RUN addgroup --system --gid 1001 nodejs<br />
                        RUN adduser --system --uid 1001 nextjs<br />
                        <br />
                        COPY --from=builder /app/next.config.js ./<br />
                        COPY --from=builder /app/public ./public<br />
                        COPY --from=builder /app/package.json ./package.json<br />

                        COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./<br />
                        COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static<br />
                        <br />
                        USER nextjs<br />
                        <br />
                        EXPOSE 3000<br />
                        <br />
                        ENV PORT 3000<br />
                        <br />
                        CMD ["node", "server.js"]
                    </Code>
                </Box>
            </Center>
        </>
    )
}
