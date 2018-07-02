import React from 'react';


class Form extends React.Component {
  defaultValues = { title: '', author: '', blurb: '', difficulty: '', keywords: '', lessons: '' }
  state = { ...this.defaultValues }
  handleSubmit = (e) => {
    e.preventDefault();
    let prescription = { ...this.state }
    this.props.submit(prescription)
    this.setState({ ...this.defaultValues })
  }
  handleChange = (e) => {
    let { target: { id, value } } = e;
    this.setState({ [id]: value })
  }
  render() {
    let { title, author, blurb, difficulty, keywords, lessons } = this.state; return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
          required
        /> <input
          id="author"
          placeholder="Author"
          value={author}
          onChange={this.handleChange}
        /> <input
          id="blurb"
          placeholder="Blurb"
          value={blurb}
          onChange={this.handleChange}
        /> <input
          id="difficulty"
          placeholder="Difficulty"
          value={difficulty}
          onChange={this.handleChange}
        /> <input
          id="difficulty"
          placeholder="Difficulty"
          value={difficulty}
          onChange={this.handleChange}
        /> <input
          id="keywords"
          placeholder="Keywords"
          value={keywords}
          onChange={this.handleChange}
        /> <input
          id="lessons"
          placeholder="Lessons"
          value={lessons}
          onChange={this.handleChange}
        />

        <button>Submit</button>
      </form>
    )
  }
}
export default Form;