import Head from 'next/head'
import Image from 'next/image'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footers/Footer';
import { Text, Link, Box, Heading, Stack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import firstStep from './FirstStepStacking.png'
import signAndSend from './signAndSend.png'
import stackStep from './stackStep.png'
import finalPage from './finalPage.png'

export default function deployNode(props) {

    const Goldie = <Text
        as='a'
        href='https://medium.com/@oGGoldie'
        target='_blank'
        textDecoration='underline'
        fontWeight='bold'
    >Goldie</Text>

    const GoldieArticle = <Link
        href='https://medium.com/@oGGoldie/flux-titan-staking-guide-e0fb6ead6254'
        target='_blank'
    ><ExternalLinkIcon />
    </Link>

    const FluxOSDashboard = <Text
        as='a'
        href='https://home.runonflux.io/'
        target='_blank'
        textDecoration='underline'
        fontWeight='bold'
    >FluxOS Dashboard</Text>

    const Zelcore = <Text
        as='a'
        href='https://zelcore.io/'
        target='_blank'
        textDecoration='underline'
    >Home — Zelcore</Text>

    const homeRunonflux = <Text
        as='a'
        href='https://home.runonflux.io/'
        target='_blank'
        textDecoration='underline'
    >home.runonflux.io</Text>


    return (
        <>
            <Head>
                <title>Want stack your Flux in Titan Node?</title>
            </Head>
            <Header />
            <Text fontSize='5xl' align={'center'} my='4' fontWeight='bold' >You want stack and earn Flux ?</Text>
            <Text fontSize='xl' align={'center'} mb='5'>Find here the shortcut of {Goldie} guide for stack and earn your Flux. {GoldieArticle}</Text>
            <Stack w='90%' mb={5}>

                <Box my='5'>
                    <Heading align={'center'} fontWeight='bold' size='xl' my='5' textDecoration='underline'>Lets get started</Heading>
                </Box>

                <Box my='5'>
                    <Heading fontWeight='bold' textDecoration='underline' size='md' my='5'> Prerequisites </Heading>
                    <Text fontSize='xl'>1. A minimum of 50 FLUX (Must be native FLUX)</Text>
                    <Text fontSize='xl'>2. A maximum of 10,000 FLUX per single stake</Text>
                    <Text fontSize='xl'>3. A maximum of 20,000 FLUX total staked</Text>
                    <Text fontSize='xl'>4. Zelcore Wallet (can be downloaded from here: {Zelcore})</Text>
                    <Text fontSize='xl'>5. A valid zel ID</Text>
                </Box>

                <Box my='5'>
                    <Heading fontWeight='bold' size='md' my='5'>Step 1 - Navigate to the Flux dashboard and login</Heading>
                    <Text pb={1}>Titan staking is all done via the FluxOS dashboard, which runs on and is accessible from every node on the Flux network.</Text>
                    <Text pb={1}>Navigate to {homeRunonflux}, which will pull up the FluxOS dashboard of a random node: {FluxOSDashboard}</Text>
                    <Text pb={1}>You’ll be presented with a page which shows some information about the node you’re currently viewing. In order to stake your Flux, you’ll need to login with your ZelID</Text>
                    <Text pb={3}>Click the fingerprint looking icon shown below.</Text>
                    <Image src={firstStep}
                        alt="firstStep"
                        placeholder='blur'
                    />
                    <Text pb={1} pt={3}>This will open up Zelcore, which will prompt you to login if you have not already done so.</Text>
                    <Text pb={3}>Next, a popup should appear within Zelcore, asking for you to input your ZelID pin. Enter your pin and click “Sign and Send”.</Text>
                    <Image src={signAndSend}
                        alt="signAndSend"
                        placeholder='blur'
                    />
                    <Text pb={1} pt={3}>You should now be logged in to FluxOS with your ZelID.</Text>
                </Box>

                <Box my='5'>
                    <Heading fontWeight='bold' size='md' my='5'> Step 2 - Navigate to the Titan page</Heading>
                    <Text pb={1}>On the left-hand side of the dashboard page, you should see a navigation menu. Find “Marketplace”, click on it, and click the “Marketplace” link that appears in the drop down.</Text>
                    <Text pb={1}>Next, click “Shared Nodes” from the list of categories.</Text>
                    <Text pb={1}>You will now be on the Titan staking page.</Text>
                </Box>

                <Box my='5'>
                    <Heading fontWeight='bold' size='md' my='5'> Step 3 - Stake your Flux</Heading>
                    <Text pb={1}>From this page, you can view how many Titan nodes are live, how much FLUX is staked, your active stakes, and more.</Text>
                    <Text pb={1}>To get your FLUX staked, firstly you need to create a new stake.</Text>
                    <Text pb={3}>Click the “Stake Flux”</Text>
                    <Image src={stackStep}
                        alt="stackStep"
                        placeholder='blur'
                    />
                    <Text pb={1} pt={3}>This will open up a window.</Text>
                    <Text pb={1}>This first page allows you to configure your stake amount. Enter in the amount of FLUX you wish to lock up and click on 'Next'.</Text>
                    <Text pb={1}>This next page allows you to choose your lockup duration. You can see longer lock-ups will earn a higher yield. There is also an option to auto-reinvest your stake after the lockup period expires.</Text>
                    <Text pb={1}>Once you have configured these, click on 'Next'.</Text>
                    <Text pb={1}>Next, you will need to sign the stake with your ZelID. Click the fingerprint button, and enter your pin in Zelcore like you did before to sign into FluxOS initially.</Text>
                    <Text pb={1}>Next, you’ll need to register your stake. Please be sure to read the warning on this page. Once sent, your FLUX cannot be unlocked until the lockup period has ended. This is set in stone.</Text>
                    <Text pb={1}>Click on the “Register Stake” button.</Text>
                    <Text pb={1}>The page will change to show registration received.</Text>
                    <Text pb={1}>Click on 'Next'.</Text>
                    <Text pb={1}>Finally, you need to actually send your FLUX to be staked. FLUX staked in Titan is sent to a multi-sig wallet. This wallet is completely safe and cannot be accessed.</Text>
                    <Text pb={1}>You can choose to either manually create the transaction, making sure to send to the correct wallet address and containing the message in the transaction memo, or you can click the fingerprint button to automatically be taken to Zelcore with a pre-configured transaction ready for you to sign and send.</Text>
                    <Text pb={1}>If you click the fingerprint button, a pop-up will appear in Zelcore with a payment request. Click on “Proceed to pay”.</Text>
                    <Text pb={1}>This will open a send transaction with all the info pre-configured. Simply click send.</Text>
                    <Text pb={1}>Now go back to the FluxOS dashboard, and click finish. This will bring up a prompt asking you to check you’ve sent the FLUX. Click yes.</Text>
                </Box>

                <Box my='5'>
                    <Heading fontWeight='bold' size='md' my='5'> Step 4 - Wait for your Flux to confirm</Heading>
                    <Text pb={1}>Once you have finished the staking process, you should see your stake appear in the “Staking Stats” table within your dashboard.</Text>
                    <Text pb={1}>Before your stake can start, your FLUX needs to be completely confirmed. This requires 30 confirmations from the Flux blockchain of your transaction. Each block takes roughly 2 minutes to be found, and therefore your stake will go live after around 60 minutes.</Text>
                    <Text pb={3}>Once your stake is fully confirmed and live, it will appear as such:</Text>
                    <Image src={finalPage}
                        alt="finalPage"
                        placeholder='blur'
                    />
                </Box>

                <Box my='5'>
                    <Heading fontWeight='bold' size='md' my='5'> Congratulations</Heading>
                    <Text>You're now actively contributing to the future of Web3 and the Flux network by providing Flux towards Proof of Useful Staking.</Text>
                </Box>
            </Stack>
            <Footer />
        </>
    )
}