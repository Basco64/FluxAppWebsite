import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, Button, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function BuildFlux() {
    return (
        <Menu isLazy={true}>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                size={'lg'}
                fontWeight="bold"
                textTransform="uppercase"
                mx={'1em'}
                px={4}
                fontSize={'lg'}
                rounded={'full'}
                bg={'#262626'}
                color={'#35C9A5'}
                _hover={{
                    bg: "#171717",
                }}
                boxShadow={useColorModeValue('0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)', '0px 1px 25px -5px rgb( 53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)')}
                _focus={{
                    bg: '#171717',
                }}
            >
                Build the Flux Network
            </MenuButton>
            <MenuList>
                <Link href="/deploy/node" passHref scroll={false}>
                    <MenuItem
                    >Set up a Node
                    </MenuItem>
                </Link>
                <Link href="/deploy/app" passHref scroll={false}>
                    <MenuItem
                    >Deploy an dApp
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    )
}
// color='gray.500'bg='gray.500'