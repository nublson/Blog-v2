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

        @media ${props => props.theme.mediaQueries.largest} {
            font-size: 60%;
        }
        @media ${props => props.theme.mediaQueries.large} {
            font-size: 57.5%;
        }
        @media ${props => props.theme.mediaQueries.small} {
            font-size: 55%;
        }
    }

    body{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        font-size: 1.7rem;
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--text-highlight);
    }
`

export default GlobalStyles
