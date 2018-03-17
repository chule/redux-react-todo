import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import { showOnlyCompleted } from './actions';
import { deleteTodo } from './actions';
import { completeTodo } from './actions';
import ListTodos from "./components/ListTodos";
import ShowUnfinished from "./components/ShowUnfinished";




class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   todos: [],
    //   showOnlyUnfinished: false,
    //   textInput: "",
    //   id: 0
    // }

    this.textInput = {};
  }

  addTodo = () => {
    var text = this.state.textInput;

    this.props.addTodoHere(text)

    this.textInput.value = "";
  }

  textInputValue = (e) => {
    this.setState({
      textInput: e.target.value
    })
  }

  changeCompleted = (id) => {
    this.props.completeTodoHere(id);
  }

  changeShowOnlyCompleted = () => {
    this.setState(
      {
        showOnlyUnfinished: !this.state.showOnlyUnfinished
      }
    )
  }

  removeTodo = (id) => {

    this.props.deleteTodoHere(id);

  }

  render() {

    return (
      <div className="container">
        <div style={{ textAlign: "center" }} className="topMargin10">
          <h1>TODO app!</h1>
          <ShowUnfinished changeShowOnlyCompleted={this.props.visability} />
          <input
            type="text"
            onChange={this.textInputValue}
            ref={node => this.textInput = node}

          />

          <button disabled={!this.textInput.value} onClick={this.addTodo}>Add todo!</button>


        </div>

        <ListTodos
          todos={this.props.todos}
          showOnlyUnfinished={this.props.visibilityFilter}
          changeCompleted={this.changeCompleted}
          removeTodo={this.removeTodo}
        />

        {this.props.todos.length > 0 &&
          <span>
            *click on todo text to set as completed
          </span>
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoHere: (text) => {
      dispatch(addTodo(text))
    },
    visability: () => {
      dispatch(showOnlyCompleted())
    },
    deleteTodoHere: (id) => {
      dispatch(deleteTodo(id));
    },
    completeTodoHere: (id) => {
      dispatch(completeTodo(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
