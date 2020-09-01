import React, { Component } from 'react';
import './content.css';

class Content extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }


  componentDidMount() {
    fetch('http://localhost:5000/books')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });

  }
  render() {
    return (
      <div className="Content">
        <div className="products">
          {this.state.data.map(list => <li key={list}>
            <img src={`http://localhost:3000/public/images/${list.reference_number}.jpg`}></img>
            <div> {list.book_name}</div>
            <div> {list.author}</div>
            <div>{list.price}$</div>
            <div>Stock {list.stock}</div>
            <button>Buy</button>
            <button>Add to cart</button>
          </li>)}
        </div>
      </div>
    );
  }
}

export default Content;