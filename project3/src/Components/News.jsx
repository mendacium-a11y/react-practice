import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <div className="container my-5">
          <h1 className='text-center my-3 mb-5'>Headlines</h1>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-3">
              <Newsitem title="test" description="lorem ipsum"/>
              <Newsitem title="test" description="lorem ipsum"/>
              <Newsitem title="test" description="lorem ipsum"/>
            </div>
            <div className="col-sm-12 col-md-3">
              <Newsitem title="test" description="lorem ipsum"/>
              <Newsitem title="test" description="lorem ipsum"/>
              <Newsitem title="test" description="lorem ipsum"/>
            </div>
            <div className="col-sm-12 col-md-3">
              <Newsitem title="test" description="lorem ipsum"/>
              <Newsitem title="test" description="lorem ipsum"/>
              <Newsitem title="test" description="lorem ipsum"/>
            </div>
          

          </div>
        </div>

      </div>
    )
  }
}

export default News