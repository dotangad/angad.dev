import React from 'react'
import styled from 'styled-components'

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

export default ({ show }) =>
  show ? (
    <ToggleContainer>
      <Icon className="fas fa-moon" />
      <Toggle
        className="toggle"
        onClick={e => {
          const switchDiv = e.target.classList.contains('toggle')
            ? e.target.childNodes[0]
            : e.target
          window.darkTheme = !window.darkTheme
          switchDiv.style.transform == ''
            ? (switchDiv.style.transform = 'translateX(12px)')
            : (switchDiv.style.transform = '')
        }}
      >
        <Switch className="switch" />
      </Toggle>
      <Icon className="fas fa-sun" />
    </ToggleContainer>
  ) : (
    ''
  )
