import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        title
                        slug
                        publishedAt(fromNow: true)
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            {data.allContentfulBlogPost.edges.map(edge => (
                <div>
                    <Link to={`/blog/${edge.node.slug}`}>
                        <h3>{edge.node.title}</h3>
                    </Link>
                    <div>{edge.node.publishedAt}</div>
                </div>
            ))}
        </Layout>
    )
}
