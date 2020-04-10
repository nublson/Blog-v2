import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import themes from '../../styles/themes'
import GlobalStyles from '../../styles/global'

import { Container, Wrapper } from './elements'

import SEO from '../utils/SEO'
import Header from '../Header'
import Footer from '../Footer'

const SmallWrapper = styled.div`
    max-width: 124rem;
    margin: 0 auto;
    width: 100%;
`

const Layout = ({ children }) => {
    const { dark } = themes.title

    return (
        <ThemeProvider theme={dark}>
            <SEO />
            <Container>
                <Wrapper>
                    <Header />
                    <SmallWrapper>{children}</SmallWrapper>
                    <Footer />
                </Wrapper>
            </Container>
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
