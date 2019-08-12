import React from 'react'

import Layout from '../components/layout'

import useSiteMetadata from '../hooks/use-site-metadata'

export default () => {
    const { author, email } = useSiteMetadata()

    return (
        <Layout>
            <h1>Contact</h1>
            <p>
                Best way to contact me is by email{' '}
                <a href={`mailto:${email}`}>
                    {author}
                </a>
            </p>
        </Layout>
    )
}
