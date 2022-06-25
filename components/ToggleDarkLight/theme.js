import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    primary: '#845EC2',
    secondary: '#FF6F91',
    highlight: '#00C9A7',
    warning: '#FFC75F',
    danger: '#C34A36 ',
    greenFlux: '#35C9A5',
    black: '#000',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#f7f7f7', '#212121')(props),
      }
    })
  },
  breakpoints: {
    sm: '360px',
    md: '800px',
    lg: '1280px'
  }
});

export default theme

