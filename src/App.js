import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [],
      text: ''
    }
  }

  handleClick = () => {
    console.log("Clicked Handled")
    this.setState({
      isClicked: !this.state.isClicked
    })

  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: ''
    })
  }
  
  componentDidUpdate(){
    console.log(this.state.todos)
  }

  render() {
     return (
    <div className="app">
      <h2>Todos</h2>
      <input type='text' onChange= {this.handleChange} value={this.state.text}/>
      <button onClick={this.handleSubmit}>submit</button>
       {/* <button onClick={this.handleClick}>{this.state.isClicked === true ? "Toggle" : "Untoggle"}</button>  */}
    </div>
  );
  }
 
}

export default App;
