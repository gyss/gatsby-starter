import React, { Component } from 'react'
import classnames from 'classnames'

import Chevron from '../Chevron'
import Link from '../Link'

import './styles.scss'

class Item extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      open: this.props.item.collapsable === false,
    }
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.expandAll !== this.props.expandAll) {
      this.setState({
        open: this.props.expandAll,
      })
    }
  }

  render() {
    const { item, currentPage, expandAll } = this.props
    const canToggle = item.collapsable !== false
    const isOpen = !canToggle || this.state.open

    return (
      <li className="item">
        <Link to={item.link}>{item.title}</Link>
      </li>
    )
  }
}

export default Item
