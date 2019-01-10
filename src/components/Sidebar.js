import React from 'react'
import styled from 'styled-components'

import Angad from './img/angad.jpeg'
import config from '../config'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`

const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AngadImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`

const Name = styled.div`
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
`

const Nav = styled.div`
  width: 100%;
`

const NavItem = styled.a`
  display: block;
  text-decoration: none;
  margin: 15px 0;
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${config.baseColor};
  }
`

const SocialIconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`

const SocialIconA = styled.a`
  text-decoration: none;
  color: inherit;
`

const SocialIcon = styled.i`
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: ${config.baseColor};
  }
`

export default () => (
  <Sidebar className="sidebar">
    <Intro>
      <AngadImg alt="Angad Singh" src={Angad} />
      <Name>Angad Singh</Name>
    </Intro>

    <Nav>
      {config.navItems.map((navItem, i) => (
        <NavItem
          key={i}
          onClick={() =>
            document
              .querySelector(`#${navItem.id}`)
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          {navItem.display}
        </NavItem>
      ))}
    </Nav>

    <SocialIconContainer>
      {config.social.map((icon, i) => (
        <SocialIconA key={i} href={icon.link}>
          <SocialIcon className={icon.fa} />
        </SocialIconA>
      ))}
    </SocialIconContainer>
  </Sidebar>
)
