import React, { Component } from 'react'

export class Newsitem extends Component {
  async componentDidMount() {
    const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=496b0449ea5e4a9caa5d546a45f775a0"
    const data = await fetch(url)
    const data_json = data.json()
  }


  render() {

    let { title, description, imageurl } = this.props
    return (
      <div>

        <div className='container my-3'></div>
        <h1>News</h1>
        <div className="row">
          <div className="card mx-4" style={{ width: '18rem' }}>
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/newsbites" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          
          
        </div>
      </div>
    )
  }
}

export default Newsitem