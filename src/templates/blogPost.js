import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Head from '../components/head'
import Layout from '../components/layout'

import s from './blogPost.module.scss'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedAt(formatString: "LLL")
            body {
                json
            }
        }
    }
`

const BlogPost = props => {
    const options = {
        renderNode: {
            'embedded-asset-block': node => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url

                return <img src={url} alt={alt} />
            },
        },
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <div className={s.blogPost}>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <div className={s.publishedAt}>
                    published at {props.data.contentfulBlogPost.publishedAt}
                </div>
                <div>
                    {documentToReactComponents(
                        props.data.contentfulBlogPost.body.json,
                        options
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default BlogPost
