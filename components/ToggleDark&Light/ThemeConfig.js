import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#F3F4F6',
  text: '#333',
  background: '#F3F4F6',
}

export const darkTheme = {
  body: '#333',
  text: '#FAFAFA',
  background: '#333',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`