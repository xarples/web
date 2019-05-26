import React from 'react'
import Button from '@material/react-button';

import './styles.scss'

const Header = props => {
  return (
    <header className="header">
      <span>
        Logo
      </span>
      <Button raised>
        Get started
      </Button>
    </header>
  )
}

export default Header