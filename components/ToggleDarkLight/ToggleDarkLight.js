import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'
import { Box } from '@chakra-ui/react'

export default function ToggleDarkLight() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box m='1em' mr='2em' style={{ float: 'right', clear: 'both' }}>
      <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Box>
  )
}