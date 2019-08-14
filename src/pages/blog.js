import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

import s from './blog.module.scss'

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        id
                        title
                        slug
                        publishedAt(fromNow: true)
                        summary {
                            summary
                        }
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
                <div className={s.blog} key={edge.node.id}>
                    <Link to={`/blog/${edge.node.slug}`}>
                        <h3>{edge.node.title}</h3>
                    </Link>
                    <div className={s.publishedAt}>
                        published {edge.node.publishedAt}
                    </div>
                    <div className={s.summary}>{edge.node.summary.summary}</div>
                </div>
            ))}
        </Layout>
    )
}
