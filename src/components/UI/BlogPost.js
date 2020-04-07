import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Tags from './Tags'

const Container = styled(Link)`
    position: relative;
    width: 32.5rem;
    height: 25rem;
    text-align: left;
    text-decoration: none;
    color: var(--text);
    border-radius: var(--radius);
    padding: 2rem;
    background-color: var(--background-highlight);
    box-shadow: 2.5px 5px 8.4px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h1`
    font-size: ${props => (props.size ? `${props.size}rem` : '1.8rem')};
    color: var(--text-highlight);
    font-weight: 600;
    display: inline-block;
    margin-bottom: ${props => (props.post ? '1rem' : '2rem')};
`

export const Info = styled.p`
    font-size: ${props => (props.size ? `${props.size}rem` : '1.3rem')};

    span {
        font-weight: bold;
        color: var(--primary);
    }
`

const BlogPost = ({ title, date, author, tags, url }) => {
    return (
        <Container to={url}>
            <Title>{title}</Title>
            <Info>
                {date}, by <span>{author}</span>
            </Info>

            <Tags card tags={tags} />
        </Container>
    )
}

export default BlogPost
