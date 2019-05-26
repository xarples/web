import React from 'react'
import Button from '@material/react-button';

import './styles.scss'

const Header = props => {
  return (
    <header className="header">
      <div>
      </div>
      <div>
        <Button dense>
          Go to console
        </Button>
        <Button raised dense>
          Get started
        </Button>
      </div>
    </header>
  )
}

export default Header