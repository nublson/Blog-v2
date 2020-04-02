import React from 'react'
import { ThemeProvider } from 'styled-components'

import themes from '../../styles/themes'
import GlobalStyles from '../../styles/global'

import { Container, Wrapper } from './elements'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
    const { dark } = themes.title

    return (
        <ThemeProvider theme={dark}>
            <Container>
                <Wrapper>
                    <Header />
                    {children}
                    <Footer />
                </Wrapper>
            </Container>
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
