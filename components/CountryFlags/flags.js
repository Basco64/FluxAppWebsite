import React from 'react'
import { Box, SimpleGrid, Link, Image } from '@chakra-ui/react'

export default function FlagsCountry() {

    return (
        <>
            <SimpleGrid columns={{ base: "4", lg: "8" }} spacing='10' my='6'>
                <Box >
                    <Link href='https://fluxarmy.org/' target='_blank'>
                        <Image src='/flag/fluxArmyFondation.png' style={{ clipPath: 'ellipse(50% 50%' }} width={'100px'} alt="Army" />
                    </Link>
                </Box>
                <Box >
                    <Link href='https://www.fluxarmy.com/' target='_blank'>
                        <Image src='/flag/fluxArmyPurple.png' style={{ clipPath: 'ellipse(50% 50%' }} width={'100px'} alt="Army" />
                    </Link>
                </Box>
                <Box >
                    <Link href='https://fluxarmyswag.com/' target='_blank'>
                        <Image src='/flag/fluxArmyRed.png' style={{ clipPath: 'ellipse(50% 50%' }} width={'100px'} alt="Army" />
                    </Link>
                </Box>
                <Box >
                    <Link href='https://mobile.twitter.com/flux_army' target='_blank'>
                        <Image src='/flag/army.jpg' style={{ clipPath: 'ellipse(50% 50%' }} width={'100px'} alt="Army" />
                    </Link>
                </Box>
                <Box >
                    <Link href='https://mobile.twitter.com/FluxVenezuela' target='_blank'>
                        <Image src='/flag/armyVenezuela.jpg' style={{ clipPath: 'ellipse(50% 50%' }} width={'100px'} alt="ArmyVenezuela" />
                    </Link>
                </Box>
                <Box >
                    <Link href='https://mobile.twitter.com/ColombiaFlux' target='_blank'>
                        <Image src='/flag/ArmyColombia.jpg' style={{ clipPath: 'ellipse(50% 50%' }} width={'100px'} alt="ArmyColombia" />
                    </Link>
                </Box>
                <Box >
                    <Link href='https://mobile.twitter.com/fluxcasanay' target='_blank'>
                        <Image src='/flag/armyCasanay.jpg' style={{ clipPath: 'ellipse(50% 50%' }} width={'100px'} alt="ArmyCasanay.jpg" />
                    </Link>
                </Box>
            </SimpleGrid>
            {/* <Box className='row no-gutters mx-auto mb-5'>
                <Box className='col-4'>
                    <Link class="twitter-timeline" href="https://twitter.com/flux_army?ref_src=twsrc%5Etfw" data-width="700" data-height="1000" data-theme="dark" >Tweets by flux_army</Link> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </Box>
                <Box className='col-4'>
                    <Link class="twitter-timeline" href="https://twitter.com/FluxPakistan?ref_src=twsrc%5Etfw" data-width="700" data-height="1000" data-theme="dark" >Tweets by FluxPakistan</Link> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </Box>
            </Box> */}
        </>
    )
}
