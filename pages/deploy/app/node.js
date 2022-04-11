import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { CloseIcon } from '@chakra-ui/icons'
import styles from './code.module.css'

export default function node() {
    return (
        <>
            <Head>
                <title>Dockerfile for Node App</title>
            </Head>
            <div className='body'>
                <div>
                <Link href="/deploy/app/" passHref scroll={false}><CloseIcon className={styles.pos}></CloseIcon></Link>
                </div>
                <div className='text-center mt-5'>
                    <div style={{ display: 'inline-flex' }}>
                        <div className='p-2 m-2' style={{ border: '2px solid', width: '60vh' }}>
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
                        </div>
                        <div className='p-2 m-2' style={{ border: '2px solid', width: '60vh' }}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}