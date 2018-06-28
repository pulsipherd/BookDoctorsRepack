import { Component } from "react";


class AllBooks extends Component {
  state = { books: [] }

  componentDidMount() {
    fetch('api/books')
      .then(res => res.json())
      .then(books => this.setState({ books }) )
      // method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Accept': 'application.json'
      // },
      // body: Book.title
    // )
  }
}
// }.then(res => res.json() )
//   .then(book => {
//       const { books } = this.state;
//       this.setState({ books: [...books, book] });
//   })



export default AllBooks;