import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    email
                    siteName
                    description
                }
            }
        }
    `)

    return data.site.siteMetadata
}

export default useSiteMetadata
