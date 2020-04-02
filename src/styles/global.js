import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
    }

    body{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        line-height: 1.7;
        --primary: ${({ theme }) => theme.colors.primary};
        --text: ${({ theme }) => theme.colors.text};
        --text-highlight: ${({ theme }) => theme.colors.text_highlight};
        --background: ${({ theme }) => theme.colors.background};
        --background-highlight: ${({ theme }) =>
            theme.colors.background_highlight};
        --radius: 2rem;
        color: var(--text);
        background-color: var(--background);
    }
`

export default GlobalStyles
