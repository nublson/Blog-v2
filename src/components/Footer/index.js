import React from 'react'
import { Container } from './styles'

const Footer = () => {
    return (
        <Container>
            <p>
                &copy; 2020 <br /> With ❤️ and ☕ by <br />{' '}
                <a
                    href="https://nubelson.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nubelson Fernandes
                </a>
            </p>
        </Container>
    )
}

export default Footer
