import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <div className="container my-5">

          <Newsitem />




        </div>

      </div>
    )
  }
}

export default News