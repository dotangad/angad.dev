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
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);
`

const Name = styled.div`
  margin-top: 30px;
  font-size: 2rem;
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
    <Intro className="intro">
      <AngadImg alt="Angad Singh" src={Angad} />
      <Name>Angad Singh</Name>
    </Intro>

    <Nav className="nav">
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

    <SocialIconContainer className="social">
      {config.social.map((icon, i) => (
        <SocialIconA target="__blank" key={i} href={icon.link}>
          <SocialIcon className={icon.fa} />
        </SocialIconA>
      ))}
    </SocialIconContainer>
  </Sidebar>
)
