import React from 'react'
import { FaGithub } from 'react-icons/fa'

import { Layout, Logo, SEO } from '../components'
import { Intro, Tagline, SocialLink, SocialLinks } from '../ui'


const IndexPage = () => (
  <Layout>
    <SEO title="Hello!" keywords={[`ardent`, `company`, `labs`]} />
    <Logo />
    <Intro>The Ardent Company</Intro>
    <Tagline>Working to improve transparency in modern organizations</Tagline>
    <SocialLinks>
      <SocialLink href="https://github.com/ardent-co" target="_blank">
        <FaGithub />
      </SocialLink>
    </SocialLinks>
  </Layout>
)

export default IndexPage
