import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'
import styles from './ToggleDarkLight.module.css'

export default function ToggleDarkLight() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className={styles.position}>
      <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </div>
  )
}