import React from 'react'
import styled from 'styled-components'

const StyledTags = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    position: ${props => props.card && 'absolute'};
    bottom: 2rem;
    margin-bottom: ${props => !props.card && '3rem'};

    p:not(:last-child) {
        margin-right: 1rem;
    }

    p {
        color: #000;
        background-color: var(--primary);
        padding: 0.1rem 0.8rem;
        display: inline-block;
        border-radius: var(--radius);
    }
`

const Tags = ({ tags, size, card }) => {
    return (
        <StyledTags size={size} card={card}>
            {tags.map((tag, index) => {
                const hashtag = `#${tag.split(' ').join('')}`
                return <p key={index}> {hashtag} </p>
            })}
        </StyledTags>
    )
}

export default Tags
