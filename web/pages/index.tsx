import * as React from 'react'
import { Cell, Grid, Row } from '@material/react-layout-grid'

import Header from '../components/shared/header/Header'
import Hero from '../components/shared/hero/Hero'

import '../components/shared/styles.scss'

interface Props { }

const Index = (props: Props) => {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  )
}

export default Index