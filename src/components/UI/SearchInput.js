import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width: 25rem;
    text-align: center;
    font-family: inherit;
    font-size: 1.4rem;
    color: var(--text);
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid var(--primary);
    border-radius: var(--radius);
`

const SearchInput = () => {
    return <Input placeholder="Search" />
}

export default SearchInput
