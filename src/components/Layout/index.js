import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import themes from '../../styles/themes'
import GlobalStyles from '../../styles/global'

import { Container, Wrapper } from './elements'

import Header from '../Header'
import Footer from '../Footer'

const SmallWrapper = styled.div`
    max-width: 124rem;
    margin: 0 auto;
`

const Layout = ({ children }) => {
    const { dark } = themes.title

    return (
        <ThemeProvider theme={dark}>
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
