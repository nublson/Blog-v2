import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 32.5rem;
    height: 25rem;
    text-align: left;
    border-radius: var(--radius);
    padding: 2rem;
    background-color: var(--background-highlight);
    box-shadow: 2.5px 5px 8.4px rgba(0, 0, 0, 0.25);
`

const Title = styled.h2`
    font-size: 1.8rem;
    color: var(--text-highlight);
    font-weight: 600;
    display: inline-block;
    margin-bottom: 2rem;
`

const Info = styled.p`
    font-size: 1.3rem;

    span {
        font-weight: bold;
        color: var(--primary);
    }
`

const Tags = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
    position: absolute;
    bottom: 2rem;

    p:not(:last-child) {
        margin-right: 1rem;
    }

    p {
        color: #000;
        background-color: var(--primary);
        padding: 0.2rem 1.2rem;
        display: inline-block;
        border-radius: var(--radius);
    }
`

const BlogPost = ({ title, date, author, tags }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Info>
                {date}, by <span>{author}</span>
            </Info>

            <Tags>
                {tags.map((tag, index) => {
                    const hashtag = `#${tag}`
                    return <p key={index}> {hashtag} </p>
                })}
            </Tags>
        </Container>
    )
}

export default BlogPost
