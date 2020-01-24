
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'
import Header from '../../organism/Header'
import GridTemplate from '../GridTemplate'

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: ${size('maxWidth')};
`

const Wrapper = styled.div`
 
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`
class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.options = {}
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <GridTemplate />
      </Wrapper>


    );
  }
}
export default PageTemplate
