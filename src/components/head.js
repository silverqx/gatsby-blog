import React from 'react'
import { Helmet } from 'react-helmet'

import useSiteMetadata from '../hooks/useSiteMetadata'

const Head = ({ title }) => {
    const { siteName, description } = useSiteMetadata()

    return (
        <Helmet
            titleTemplate={`%s | ${siteName}`}
            defaultTitle={siteName}
            title={title}
        >
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default Head
