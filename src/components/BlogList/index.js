import React from 'react'

import { BlogPosts } from './styles'

import BlogPost from '../UI/BlogPost'
import { MoreIcon } from '../UI/Icons'

import array from '../../utils/api.json'

const BlogList = () => {
    const { data } = array
    return (
        <>
            <BlogPosts>
                {data.map((post, index) => (
                    <BlogPost
                        key={index}
                        title={post.title}
                        date={post.date}
                        author={post.author}
                        tags={post.tags}
                    />
                ))}
            </BlogPosts>
            <MoreIcon />
        </>
    )
}

export default BlogList
