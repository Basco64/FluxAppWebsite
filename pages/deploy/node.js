import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text, Link, Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import DatatabsNodeVideo from '../../components/DataTabs/DatatabsNodeVideo/DatatabsNodeVideo';
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function deployNode(props) {


  return (
    <>
      <Head>
        <title>Want to run a FluxNode ?</title>
      </Head>
      <Header />
      <Text fontSize='5xl' align={'center'} my='4' fontWeight='bold' >You want to run a FluxNode ?</Text>
      <Text fontSize='xl' align={'center'} mb='5'>Find here all the requirements and Youtube videos according to your language to set up a Fluxnode!!</Text>
      <Box align={'center'}>
        <Link href='https://runonflux.io/flux-nodes.html' isExternal>
          Official Documentation <ExternalLinkIcon mx='2px' />
        </Link>
      </Box>
      <SimpleGrid columns={{base:'1',xl:'2'}} justify={'between'} mx='auto' p='2' mb='5'>

        {/* Flux-Node Structure */}

        <Stack>
          <TableContainer>
            <Table display='inline-block'>
              < Thead>
                <Tr >
                  <Th colSpan="4" mb='5'><Heading size='lg' align={'center'}>Flux-Node Structure</Heading></Th>
                </Tr>
              </ Thead>
              <Tbody>
                <Tr >
                  <Td style={{ border: '2px solid' }}></Td>
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Cumulus</Heading></Td>
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Nimbus</Heading></Td>
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Stratus</Heading></Td>
                </Tr>
                <Tr  >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Collateral</Heading></Td>
                  <Td style={{ border: '2px solid' }}>1000 Flux</Td>
                  <Td style={{ border: '2px solid' }}>12 500 Flux</Td>
                  <Td style={{ border: '2px solid' }}>40 000 Flux</Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Cores</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 2 </Td>
                  <Td style={{ border: '2px solid' }}> 4 </Td>
                  <Td style={{ border: '2px solid' }}> 8 </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}> <Heading size='md' align={'center'}>Threads</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 4 </Td>
                  <Td style={{ border: '2px solid' }}> 8 </Td>
                  <Td style={{ border: '2px solid' }}> 16 </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}> <Heading size='md' align={'center'}>EPS</Heading > <Text align={'center'}>Events Per Second</Text> </Td>
                  <Td style={{ border: '2px solid' }}> 320 on 4 threads </Td>
                  <Td style={{ border: '2px solid' }}> 640 on 8 threads </Td>
                  <Td style={{ border: '2px solid' }}> 1600 on 16 threads </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}> <Heading size='md' align={'center'}>RAM</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 8 Gb </Td>
                  <Td style={{ border: '2px solid' }}> 32 Gb </Td>
                  <Td style={{ border: '2px solid' }}> 64 Gb </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}> <Heading size='md' align={'center'}>Storage</Heading> </Td>
                  <Td style={{ border: '2px solid' }}> 220 Gb </Td>
                  <Td style={{ border: '2px solid' }}> 440 Gb </Td>
                  <Td style={{ border: '2px solid' }}> 880 Gb </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}> <Heading size='md' align={'center'}>SSD</Heading> </Td>
                  <Td style={{ border: '2px solid' }}> 180 Mb/s </Td>
                  <Td style={{ border: '2px solid' }}> 180 Mb/s </Td>
                  <Td style={{ border: '2px solid' }}> 400 Mb/s </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}> <Heading size='md' align={'center'}>Internet Speed</Heading> </Td>
                  <Td style={{ border: '2px solid' }}> 25 Mb Up/Down </Td>
                  <Td style={{ border: '2px solid' }}> 50 Mb Up/Down </Td>
                  <Td style={{ border: '2px solid' }}> 100 Mb Up/Down </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}> <Heading size='md' align={'center'}>Devices</Heading> </Td>
                  <Td style={{ border: '2px solid' }}> VPS , Rented Dedicated Servers,<br /> Self Hosting Servers </Td>
                  <Td style={{ border: '2px solid' }}> VPS , Rented Dedicated Servers,<br /> Self Hosting Servers </Td>
                  <Td style={{ border: '2px solid' }}> Rented Dedicated Servers, <br /> Self Hosting Servers </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}> <Heading size='md' align={'center'}>Self Hosting Devices</Heading><Text align={'center'}>ARM64</Text></Td>
                  <Td style={{ border: '2px solid' }}> Nvidia Jetson Nano,<br /> Nvidia Jetson Xavier,<br />Nvidia Jetson AGX Orin,<br /> Raspberry Pi4B, HoneyComb LX2 </Td>
                  <Td style={{ border: '2px solid' }}> Nvidia Jetson Xavier; <br />
                    Nvidia Jetson AGX Orin, <br />
                    HoneyComb LX2 </Td>
                  <Td style={{ border: '2px solid' }}> </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>

        {/* Stacking */}

        <Stack>
          <TableContainer mb='4'>
            <Table style={{ display: 'inline-block' }} >
              < Thead>
                <Tr>
                  <Th colSpan="2" mb='5'><Heading size='lg' align={'center'}>Stacking</Heading></Th>
                </Tr>
              </ Thead>
              <Tbody>
                <Tr>
                  <Td style={{ border: '2px solid' }}></Td>
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}> Titan </Heading ></Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Colaterral</Heading></Td>
                  <Td style={{ border: '2px solid' }}> ~ 250 Flux per user</Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Cores</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 8 </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Threads</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 16 </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>EPS</Heading><Text align={'center'}>Events Per Second</Text></Td>
                  <Td style={{ border: '2px solid' }}> 1600 on 16 threads </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>RAM</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 64 Gb  </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Storage</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 880 Gb </Td>
                </Tr>
                <Tr>
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>SSD</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 400 Mb/s </Td>
                </Tr>
                <Tr>
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Internet Speed</Heading></Td>
                  <Td style={{ border: '2px solid' }}> 100 Mb Up/Down</Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Devices</Heading></Td>
                  <Td style={{ border: '2px solid' }}> Enterprise quality infrastructure for developed platforms </Td>
                </Tr>
                <Tr >
                  <Td style={{ border: '2px solid' }}><Heading size='md' align={'center'}>Rules</Heading></Td>
                  <Td style={{ border: '2px solid' }}>
                    Zelcore will the the “staking” portal, <br />
                    All Flux lockups will be on chain with Infinity contracts,<br />
                    The lockup will be 6 months per node,<br />
                    After 6 months, the node will expire and <br />
                    release all users funds to users with rewards.
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </SimpleGrid>

      {/* Tutorial Videos */}

      <Box mb='5'>
        <Text fontSize='4xl' align={'center'} fontWeight='bold' mb='5'>Choose your language and find your guide</Text>
        <DatatabsNodeVideo />
      </Box>
      <Footer />
    </>
  )
}