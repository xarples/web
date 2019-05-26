import * as React from 'react'
import { Cell, Grid, Row } from '@material/react-layout-grid'

import Header from '../components/shared/header/Header'

import '../components/shared/styles.scss'

interface Props { }

const Index = (props: Props) => {
  return (
    <Grid>
      <Row>
        <Cell columns={12}>
          <Header />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={3}>Test</Cell>
        <Cell desktopColumns={3}>Test</Cell>
        <Cell desktopColumns={3}>Test</Cell>
        <Cell desktopColumns={3}>Test</Cell>
      </Row>
    </Grid>
  )
}

export default Index