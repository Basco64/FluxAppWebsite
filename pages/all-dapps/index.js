import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footers/Footer';
import { Heading, Stack, Link, Text, useColorModeValue, Box, SimpleGrid } from '@chakra-ui/react'


export default function Home(props) {

    const games = props.array[1].data
    const other = props.array[2].data
    const gameServers = props.array[3].data
    const dapps = props.array[4].data

    return (
        <>
            <Head>
                <title>Want to see all dApps deploy on the Flux Network?</title>
            </Head>
            <Header />
            <Heading fontSize='4xl' align={'center'} m={4}>All dApps hosted on the Flux network</Heading>
            <SimpleGrid columns={{ sm: "1", md: "3", lg: "5" }} p={2}>
                {dapps.map(icone => (
                    <Box mb={4} p={1} w="20rem" key={uuidv4()}>
                        <Stack align={'center'}>
                            <Link
                                href={icone.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ borderRadius: '25px', overflow: 'hidden' }}
                                height={200}
                            >
                                <Image
                                    src={icone.img}
                                    alt="Card image"
                                    width={200}
                                    height={200}
                                />
                            </Link>
                        </Stack>
                        <Stack>
                            <Text align={'center'} color={useColorModeValue('black', 'gray.500')}>{icone.title}</Text>
                        </Stack>
                    </Box>
                ))}
                {games.map(icone => (
                    <Box mb={4} p={1} w="20rem" key={uuidv4()}>
                        <Stack align={'center'}>
                            <Link
                                href={icone.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ borderRadius: '25px', overflow: 'hidden' }}
                                height={200}
                            >
                                <Image
                                    src={icone.img}
                                    alt="Card image"
                                    width={200}
                                    height={200}
                                />
                            </Link>
                        </Stack>
                        <Stack>
                            <Text align={'center'} color={useColorModeValue('black', 'gray.500')}>{icone.title}</Text>
                        </Stack>
                    </Box>
                ))}
                {other.map(icone => (
                    <Box mb={4} p={1} w="20rem" key={uuidv4()}>
                        <Stack align={'center'}>
                            <Link
                                href={icone.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ borderRadius: '25px', overflow: 'hidden' }}
                                height={200}
                            >
                                <Image
                                    src={icone.img}
                                    alt="Card image"
                                    width={200}
                                    height={200}
                                />
                            </Link>
                        </Stack>
                        <Stack>
                            <Text align={'center'} color={useColorModeValue('black', 'gray.500')}>{icone.title}</Text>
                        </Stack>
                    </Box>
                ))}
                {gameServers.map(icone => (
                    <Box mb={4} p={1} w="20rem" key={uuidv4()}>
                        <Stack
                            align={'center'}
                            style={{ borderRadius: '25px', overflow: 'hidden' }}
                            height={200}
                            width={200}
                        >
                            <Image
                                src={icone.img}
                                alt="Card image"
                                width={200}
                                height={200}
                            />
                        </Stack>
                        <Stack>
                            <Text align={'center'} color={useColorModeValue('black', 'gray.500')}>{icone.name}</Text>
                            <Text align={'center'} color={useColorModeValue('black', 'gray.500')}> on Port : {icone.port}</Text>
                        </Stack>
                    </Box>
                ))}
            </SimpleGrid>
            <Footer />
        </>
    )
}

export async function getStaticProps() {

    const data = await import(`/data/apps.json`)
    const array = data.linkList

    return {
        props: {
            array
        }
    }
}