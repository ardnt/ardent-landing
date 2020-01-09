import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { LogoContainer } from "../ui"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <LogoContainer>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </LogoContainer>
    )}
  />
)

export { Logo }
