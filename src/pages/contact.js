import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'

import useSiteMetadata from '../hooks/useSiteMetadata'

export default () => {
    const { author, email } = useSiteMetadata()

    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>
                Best way to contact me is by email{' '}
                <a href={`mailto:${email}`}>{author}</a>
            </p>
        </Layout>
    )
}
