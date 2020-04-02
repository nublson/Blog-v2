import React from 'react'

import { BlogPosts } from './styles'

import BlogPost from '../UI/BlogPost'
import { MoreIcon } from '../UI/Icons'

const BlogList = () => {
    return (
        <>
            <BlogPosts>
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </BlogPosts>
            <MoreIcon />
        </>
    )
}

export default BlogList
