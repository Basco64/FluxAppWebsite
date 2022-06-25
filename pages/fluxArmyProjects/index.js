import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footers/Footer'
import { Heading, Stack, Text, useColorModeValue, Box, Link, SimpleGrid, Button } from '@chakra-ui/react'

export default function Projects(props) {

    const projects = props.array

    return (
        <>
            <Head>
                <title>Flux Army Projects</title>
            </Head>
            <Header />
            <Heading fontSize='4xl' align={'center'} m={4} textDecoration='underline'>Flux Army Foundation Projects</Heading>
            <SimpleGrid columns={{ base: "1", md: "2", lg: "4" }}>
                {projects.map(project => (
                    <Box mb={4} p={1} w="20rem" key={uuidv4()}>
                        <Stack>
                            <Text align={'center'} height={75} fontSize='2xl' fontWeight='bold' m={4} color={useColorModeValue('black', 'gray.500')}>{project.project}</Text>
                        </Stack>
                        <Stack align={'center'} pb={6}>
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ borderRadius: '20px', overflow: 'hidden' }}
                                height={200}
                            >
                                <Image
                                    src={project.img}
                                    alt="Card image"
                                    width={400}
                                    height={300}
                                />
                            </Link>
                        </Stack>
                        <Stack>
                            <Text 
                            align={'center'} 
                            height={175} 
                            color={useColorModeValue('black', 'gray.500')}
                            overflowY={'auto'}
                            >{project.description}</Text>
                        </Stack>
                        <Stack py={'5'} align={'center'}>
                            <Button
                                size={'md'}
                                fontWeight="bold"
                                textTransform="uppercase"
                                px={4}
                                mx={{ base: "6em", sm: "8em", lg: "10em" }}
                                fontSize={'lg'}
                                bg={'#262626'}
                                color={'#35C9A5'}
                                _hover={{
                                    bg: "#171717",
                                }}
                                boxShadow={useColorModeValue('0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)', '0px 1px 25px -5px rgb( 53 201 165 / 70%), 0 9px 8px -5px rgb( 53 201 165 / 43%)')}
                                _focus={{
                                    bg: '#171717'
                                }}
                                as="a"
                                target="_blank"
                                href={project.link}
                            >
                                Support
                            </Button>
                        </Stack>
                    </Box>
                ))}
            </SimpleGrid>
            <Footer />
        </>
    )
}

export async function getStaticProps() {

    const data = await import(`/data/projects.json`)
    const array = data.projectsList

    return {
        props: {
            array
        }
    }
}