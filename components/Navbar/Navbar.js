import { useState } from 'react'
import Home from './NavButtons/Home';
import Dapps from './NavButtons/Dapps';
import FluxArmy from './NavButtons/FluxArmy';
import News from './NavButtons/News';
import BuildFlux from './NavButtons/BuildFlux';
import Improve from './NavButtons/Improve';
import FluxArmyProjects from './NavButtons/FluxArmyProjects';
import { Flex, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function NavBar() {

  const [display, changeDisplay] = useState('none')

  return (
    <Flex>
      <Flex
        py={10}
        direction={{ base: 'column', md: 'row' }}
        align="center"
      >
        {/* Desktop */}

        <Flex
          display={{ base: 'none', lg: 'flex' }}
        >
          <Home />
          <News />
          <Dapps />
          <FluxArmy />
          <FluxArmyProjects />
          <BuildFlux />
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          style={{ float: 'left' }}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={{ base: 'flex', lg: 'none' }}
        />
      </Flex>

      {/* Mobile Content */}

      <Flex
        display={display}
        bgColor={useColorModeValue('transparent')}
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
          gap='0.75em'
          my='1.5em'
        >
          <Home />
          <News />
          <Dapps />
          <FluxArmy />
          <FluxArmyProjects />
          <BuildFlux />
        </Flex>
      </Flex>
    </Flex>
  )
}