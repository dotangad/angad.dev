import React from 'react'
import styled from 'styled-components'

import config from '../config'

export const Section = styled.div`
  padding: 20px;
  margin: 30px 0;
  width: 100%;
  text-align: justify;
`

export const SectionHeader = styled.div`
  margin: 20px 0;
  font-size: 2rem;
  font-weight: bold;
`

export const Link = styled.a`
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 3px solid #555;
  transition: color 0.5s ease;
  &:hover {
    color: ${config.baseColor};
    border-bottom-color: ${config.baseColor};
  }
`
