import React, { Component } from 'react'
import classnames from 'classnames'

import Item from './Item'
import ToggleSidebarButton from '../ToggleSidebarButton'

import './styles.scss'

class Sidebar extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
      expandAll: false,
    }
  }

  toggleSidebar = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  toggleExpandAll = () => {
    this.setState({
      expandAll: !this.state.expandAll,
    })
  }

  render() {
    const { location, documents } = this.props
    const { open, expandAll } = this.state

    return <ToggleSidebarButton open={open} onClick={this.toggleSidebar} />
  }
}

export default Sidebar
