import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import './header.css'
import SearchBar from '../../molecules/SearchBar'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.options = {}
  }
  render() {
    return (
      <header className="header">
        <nav className="headerMenu">
          <a href="#">Home</a>
          <a href="#">About Us</a>

        </nav>

        <SearchBar searchBoxName={"userNameSearch"} />



      </header>

    )
  }
}

export default Header
