import { Text, useColorModeValue, Stack, Button } from '@chakra-ui/react'

export default function whatTheFluxBtn() {
    return (
        <Stack
            py={'5'}
            border='2px'
        >
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
                href="https://www.mindmeister.com/fr/map/2171657785?t=UHmFMQbZT1"
            >What the Flux ?!
            </Button>
            <Stack textAlign={'center'}>
                <Text fontWeight="bold">The Ultimate Guide</Text>
                <Text fontWeight="bold">By 👽 KaZaꓘ 👽 FLUX DSA#3572</Text>
            </Stack>
        </Stack>
    )
}