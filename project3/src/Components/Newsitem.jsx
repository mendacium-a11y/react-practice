import React, { Component } from 'react';

export class Newsitem extends Component {
  state = {
    news: null, // Initialize news state to null
  };

  async componentDidMount() {
    try {
      const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=496b0449ea5e4a9caa5d546a45f775a0";
      const response = await fetch(url);
      const data = await response.json();

      this.setState({ news: data }); // Store the fetched data in the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { news } = this.state; // Retrieve news data from state

    return (
      <div>
        <div className='container my-3'></div>
        <h1>News</h1>
        <div className="row">
          {news && news.articles.map((item, index) => (
            <div className="card mx-4" style={{ width: '18rem' }} key={index}>
              <img src={item.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href={item.url} className="btn btn-primary">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Newsitem;
