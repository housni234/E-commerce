import React, { Component } from 'react';
import './content.css';

class Content extends Component {
  constructor(){
    super()
    this.state={
        data: []
    }
  }
 

  componentDidMount(){
    fetch('http://localhost:5000/books')
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({ data : responseJson })
    })
    .catch((error) => {
        console.error(error);
    });

  }
  render() {
    return (
      <div className="Content">
        {this.state.data.map(list => <li>
        BOOK: {list.book_name}
         AUTHOR: {list.author} 
         PRICE: {list.price}$ 
         STOCK: {list.stock}
          <img src="http://localhost:3000/public/images/${list.reference_number}"></img>
         </li>)}


      </div>
    );
  }
}

export default Content;