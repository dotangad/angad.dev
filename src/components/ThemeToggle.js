import React from 'react'
import styled from 'styled-components'

import config from '../config'

const ToggleContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.i`
  font-size: 15px;
`

const Toggle = styled.div`
  display: inline-block;
  margin: 0 10px;
  width: 35px;
  border-radius: 50px;
  background: #00000080;
  height: 20px;
  position: relative;
  z-index: 100000;
  display: flex;
  align-items: center;
`

const Switch = styled.div`
  height: 15px;
  width: 15px;
  background: white;
  border-radius: 100px;
  margin: 0 4px;
  padding: 0;
  transition: transform ease 0.3s;
  position: relative;
  z-index: 100001;
`

export default class ThemeToggle extends React.Component {
  constructor() {
    super()
    this.state = {
      darkTheme: false
    }
  }

  onThemeToggle = e => {
    window.darkTheme = !window.darkTheme
    const switchDiv = e.target.classList.contains('toggle')
      ? e.target.childNodes[0]
      : e.target
    window.darkTheme
      ? (switchDiv.style.transform = 'translateX(12px)')
      : (switchDiv.style.transform = '')

    if (window.darkTheme) {
      document.querySelectorAll('*').forEach((e, i, all) => {
        e.style.color = '#fefefe'
      })

      const body = document.body
      body.style.background = '#000000'

      document
        .querySelectorAll('.toggle')
        .forEach((e, i, all) => (e.style.background = '#ffffff80'))
      document
        .querySelectorAll('.switch')
        .forEach((e, i, all) => (e.style.background = '#000'))

      document.querySelectorAll('a').forEach((e, i, all) => {
        e.addEventListener('mouseenter', () => {
          e.style.color = config.baseColor
        })
        e.addEventListener('mouseleave', () => {
          e.style.color = '#fefefe'
        })
      })

      document.querySelectorAll('a').forEach((e, i, all) => {
        e.style.borderColor = '#ddd'
        e.addEventListener('mouseenter', () => {
          e.style.borderColor = config.baseColor
          e.style.color = config.baseColor
        })
        e.addEventListener('mouseleave', () => {
          e.style.borderColor = '#ddd'
          e.style.color = '#fefefe'
        })
      })
      document.querySelectorAll('a i').forEach((e, i, all) => {
        e.style.borderColor = '#ddd'
        e.addEventListener('mouseenter', () => {
          e.style.borderColor = config.baseColor
          e.style.color = config.baseColor
        })
        e.addEventListener('mouseleave', () => {
          e.style.borderColor = '#ddd'
          e.style.color = '#fefefe'
        })
      })
    } else {
      document.querySelectorAll('*').forEach((e, i, all) => {
        e.style.color = '#333'
      })

      const body = document.body
      body.style.background = 'white'

      document
        .querySelectorAll('.toggle')
        .forEach((e, i, all) => (e.style.background = '#00000080'))
      document
        .querySelectorAll('.switch')
        .forEach((e, i, all) => (e.style.background = '#fff'))

      document.querySelectorAll('a').forEach((e, i, all) => {
        e.addEventListener('mouseenter', () => {
          e.style.color = config.baseColor
        })
        e.addEventListener('mouseleave', () => {
          e.style.color = '#333'
        })
      })

      document.querySelectorAll('a').forEach((e, i, all) => {
        e.style.borderColor = '#333'
        e.addEventListener('mouseenter', () => {
          e.style.borderColor = config.baseColor
          e.style.color = config.baseColor
        })
        e.addEventListener('mouseleave', () => {
          e.style.borderColor = '#333'
          e.style.color = '#333'
        })
      })
      document.querySelectorAll('a i').forEach((e, i, all) => {
        e.style.borderColor = '#333'
        e.addEventListener('mouseenter', () => {
          e.style.borderColor = config.baseColor
          e.style.color = config.baseColor
        })
        e.addEventListener('mouseleave', () => {
          e.style.borderColor = '#333'
          e.style.color = '#333'
        })
      })
    }
  }

  render = () => (
    <ToggleContainer className="toggle-container">
      <Icon className="fas fa-sun" />
      <Toggle className="toggle" onClick={this.onThemeToggle}>
        <Switch
          className="switch"
          style={{ transform: window.darkTheme ? 'transformX(12px)' : '' }}
        />
      </Toggle>
      <Icon className="fas fa-moon" />
    </ToggleContainer>
  )
}
