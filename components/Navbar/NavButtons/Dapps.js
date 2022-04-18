import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, Button , useColorModeValue} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Dapps() {
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
                boxShadow={useColorModeValue('0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)', '0px 1px 25px -5px rgb(	53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)')}
                _focus={{
                    bg: '#171717',
                }}
            >
                Dapps
            </MenuButton>
            <MenuList>
                <Link href="/all-dapps" passHref scroll={false}>
                    <MenuItem
                    >All Dapps
                    </MenuItem>
                </Link>
                <Link href="/all-dapps/community" passHref scroll={false}>
                    <MenuItem
                    >Community dApps
                    </MenuItem>
                </Link>
                <Link href="/all-dapps/games" passHref scroll={false}>
                    <MenuItem
                    >Games
                    </MenuItem>
                </Link>
                <Link href="/all-dapps/game-servers" passHref scroll={false}>
                    <MenuItem
                    >Game servers
                    </MenuItem>
                </Link>
                <Link href="/all-dapps/other" passHref scroll={false}>
                    <MenuItem
                    >Other
                    </MenuItem>
                </Link>
                <Link href="/all-dapps/flux-socials" passHref scroll={false}>
                    <MenuItem
                    >Flux Socials
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    )
}