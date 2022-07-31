import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [
        {id: "1", todo: "Feed Fish"},
        {id: "2", todo: "Go to place"},
        {id: "3", todo: "Something else"}
      ],
      text: ''
    }
  }

  handleClick = (e, id) => {
    console.log(e.target.innertext)

    const filtered = this.state.todos.filter( (todo) => todo.id !== id)
    console.log(filtered)

    this.setState({
      todos: filtered
    })

  }

  handleDelete = (index) => {
    console.log("Bye")
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (e) => {
    this.setState({
      todos: [...this.state.todos, {id: nanoid(), todo: this.state.text}],
      text: ''
    })
  }
  


  render() {
     return (
    <div className="app">
      <h2>Todos</h2>
      <input type='text' onChange= {this.handleChange} value={this.state.text}/>
      <button onClick={this.handleSubmit}>submit</button>
      <ol>
        {this.state.todos.map(({todo, id}) => {
          return (
            <li key={id} onClick={(e) => this.handleClick(e, id)}>
            {todo}
            </li>
          )
          
        })}
      </ol>
       {/* <button onClick={this.handleClick}>{this.state.isClicked === true ? "Toggle" : "Untoggle"}</button>  */}
    </div>
  );
  }
 
}

export default App;
