import { Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link'

export default function News() {
    return (
        <Link href="/news" passHref scroll={false}>
            <Button
                size={'lg'}
                fontWeight="bold"
                textTransform="uppercase"
                px={4}
                mx={'1em'}
                fontSize={'lg'}
                rounded={'full'}
                bg={'#262626'}
                color={'#35C9A5'}
                _hover={{
                    bg: "#171717",
                }}
                boxShadow={useColorModeValue('0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)', '0px 1px 25px -5px rgb(	53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)')}
                _focus={{
                    bg: '#171717',
                }}
            >
                News
            </Button>
        </Link>
    )
}