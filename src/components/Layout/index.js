import React from 'react'
import { ThemeProvider } from 'styled-components'

import themes from '../../styles/themes'
import GlobalStyles from '../../styles/global'

import { Container, Wrapper } from './elements'

const Layout = ({ children }) => {
    const { dark } = themes.title

    return (
        <ThemeProvider theme={dark}>
            <Container>
                <Wrapper>{children}</Wrapper>
            </Container>
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
