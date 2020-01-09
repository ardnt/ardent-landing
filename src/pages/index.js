import React from "react"
import { FaGithub } from "react-icons/fa"

import { Layout, Logo, SEO } from "../components"
import { Intro, Tagline, SocialLink, SocialLinks } from "../ui"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hello!"
      keywords={[`ardent`, `ardnt`, `software`, `development`]}
    />
    <Logo />
    <Intro>We're Ardent</Intro>
    <Tagline>
      We work hard to build delightful tools for modern organizations
    </Tagline>
    <SocialLinks>
      <SocialLink href="https://github.com/ardnt" target="_blank">
        <FaGithub />
      </SocialLink>
    </SocialLinks>
  </Layout>
)

export default IndexPage
