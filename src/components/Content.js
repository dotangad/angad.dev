import React from 'react'
import styled, { keyframes } from 'styled-components'

import config from '../config'
import { Section, SectionHeader, Link } from './Helpers'

const Content = styled.div`
  padding: 50px;
  font-size: 1.3rem;
  line-height: 2rem;
`

const Wave = styled.span`
  transform: rotate(-20deg);
`

const About = () => (
  <Section>
    <SectionHeader>About</SectionHeader>
    <Wave>👋</Wave>
    Hi! I'm Angad, a student at{' '}
    <Link href="https://dpsrkp.net">Delhi Public School, R.K. Puram</Link> and
    member at <Link href="https://exunclan.com">Exun Clan</Link>. I am
    passionate about solving problems with technology and creating products
    people love. Some of my other interests include politics, economics and
    theological history.
  </Section>
)

export default () => (
  <Content className="content">
    <About />
  </Content>
)
