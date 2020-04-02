import React from 'react'
import { ThemeProvider } from 'styled-components'

import themes from '../../styles/themes'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
    const { dark } = themes.title

    console.log(dark)

    return (
        <ThemeProvider theme={dark}>
            {children}
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
