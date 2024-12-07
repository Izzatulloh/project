import React from 'react'
import { Fragment, ArrowIcon, Wrapper } from './moliyaStyle'
import Subtitle from '../Generics/Subtitle'

const Moliya = () => {
  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left="true"/>
        <Subtitle>December 4</Subtitle>
        <ArrowIcon />
      </Fragment>
    </Wrapper>
  )
}

export default Moliya