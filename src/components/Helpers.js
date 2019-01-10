import styled from 'styled-components'

import config from '../config'

export const Section = styled.div`
  padding: 20px;
  width: 100%;
  text-align: justify;
  &:first-child {
    margin-top: 0;
  }
`

export const SectionHeader = styled.div`
  margin: 20px 0;
  font-size: 2rem;
  font-weight: bold;
`

export const SectionSubheader = styled.div`
  font-size: 1rem;
`

export const Link = styled.a`
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 3px solid #555;
  transition: color 0.2s ease;
  transition: border-color 0.2s ease;
  &:hover {
    color: ${config.baseColor};
    border-bottom-color: ${config.baseColor};
  }
`
