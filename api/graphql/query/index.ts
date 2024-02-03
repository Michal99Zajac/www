import { gql } from '@apollo/client'

export const seo = gql`
  query SEO {
    homePage {
      data {
        attributes {
          seo {
            id
            metaTitle
            metaDescription
            metaImage {
              data {
                id
                attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                  provider
                  provider_metadata
                }
              }
            }
            metaSocial {
              id
              socialNetwork
              title
              description
              image {
                data {
                  id
                  attributes {
                    name
                    alternativeText
                    caption
                    width
                    height
                    formats
                    hash
                    ext
                    mime
                    size
                    url
                    previewUrl
                    provider
                    provider_metadata
                  }
                }
              }
            }
            keywords
            metaRobots
            structuredData
            metaViewport
            canonicalURL
          }
        }
      }
    }
  }
`
