import React, { Component } from 'react';
import { InputGroup, Input, Table, Button,FormGroup, Label } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos : [
      {
        todo: "Jog for 10 min",
        isDone: false
      },
      {
        todo: "2 eggs in breakfasst",
        isDone: true
      },
      {
        todo: "make one application in react",
        isDone: false
      }
      ],
      newTodo: 
        {
          todo: "",
          isDone: false
        }
      
    }
  }

  addTodo = (e)=> {
    var todos = JSON.parse(JSON.stringify(this.state.todos));
    todos.push(this.state.newTodo);
    this.setState({
      todos,
      newTodo: {
        todo: "",
        isDone: false
      }
    })
  }

  updateTodo = (e)=>{
    var newTodo = Object.assign({}, this.state.newTodo);
    newTodo.todo = e.target.value;

    this.setState({newTodo});
  }
  updateStatus=(e)=>{
    var newTodo = Object.assign({}, this.state.newTodo);
    newTodo.isDone = e.target.value;
    this.setState({newTodo});
  }
  removeTodo (index){
    var todos = JSON.parse(JSON.stringify(this.state.todos));
    todos.splice(index, 1)
    this.setState({
      todos
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1> My Todos </h1>
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Todos</th>
              <th>Done?</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todos.map((val, index) =>{
                return(
                  <tr key={index}>
                    <th>{index+1}</th>
                    <td>{val.todo}</td>
                    <td>{val.isDone? 'Yes' : 'No'}</td>
                    <td><Button color="danger" onClick={()=>{this.removeTodo(index)}}>Remove</Button>{' '}</td>
                  </tr>
                  
                )
              })
            }
          </tbody>
        </Table>
        <div>
          <InputGroup>
            <Input placeholder="Things to do today" onChange={this.updateTodo} value={this.state.newTodo.todo}/>
            <Button color="primary" onClick={this.addTodo}>Add Todo</Button>{' '}
          </InputGroup>
          <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={this.updateStatus} />{' '}
                  Done?
              </Label>
            </FormGroup>
        </div>
      </div>
    );
  }
}

export default App;
