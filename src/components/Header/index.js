import React from 'react'

import { Container } from './styles'
import Logo from '../UI/Logo'
import SearchInput from '../UI/SearchInput'

const Header = () => {
    return (
        <Container>
            <Logo />

            <SearchInput />
        </Container>
    )
}

export default Header
