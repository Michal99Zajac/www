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

export const homePage = gql`
  query HomePage {
    homePage {
      data {
        attributes {
          contact {
            id
            email
            githubUrl
            linkedinUrl
          }
          profilePicture {
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
          introduction
          about
          profilePictures {
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
      }
    }
  }
`

export const jobs = gql`
  query Jobs {
    jobs(pagination: { pageSize: 20 }, sort: ["startDate:asc"]) {
      data {
        id
        attributes {
          companyName
          startDate
          endDate
          projects {
            data {
              id
              attributes {
                name
                startDate
                endDate
                content
              }
            }
          }
          content
        }
      }
    }
  }
`

export const skillCategories = gql`
  query skillCategories {
    skillCategories(pagination: { pageSize: 10 }) {
      data {
        id
        attributes {
          icon {
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
          name
          skills {
            data {
              id
              attributes {
                name
                isFavourite
                experienceLevel {
                  id
                  level
                  numericLevel
                }
                icon {
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
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`

export const selfProjects = gql`
  query SelfProjects {
    selfProjects(pagination: { pageSize: 10 }) {
      data {
        id
        attributes {
          name
          description
          githubUrl
          websiteUrl
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
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`
