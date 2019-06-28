import { withPrefix } from 'gatsby'
import React, { Component } from 'react'
import classnames from 'classnames'

import Link from '../Link'

import './styles.scss'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }
  }

  render() {
    const { documents } = this.props
    const { open } = this.state
    return <header>Header</header>
  }
}

export default Header
