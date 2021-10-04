import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";
import tick from "./img/tick.svg";


class App extends Component {
  constructor() {
    super();

    this.state = {
      newItem: "",
      TodoItems: [
        { title: "Di cho", isComplete: true },
        { title: "Nau an", isComplete: true },
        { title: "Di da bong", isComplete: false }
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { TodoItems } = this.state;
      const index = TodoItems.indexOf(item);
      this.setState({
        TodoItems: [
          ...TodoItems.slice(0, index),
          {
            ...item,
            isComplete: !item.isComplete
          },
          ...TodoItems.slice(index + 1)
        ]
      });
    }
  }

  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text || text === '') {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newItem: "",
        TodoItems: [
          { title: text, isComplete: false },
          ...this.state.TodoItems
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { TodoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} />
          <input
            onKeyUp={this.onKeyUp}
            type="text"
            value={newItem}
            onChange={this.onChange}
            placeholder="Which task do you want to add?" />
        </div>
        {
          TodoItems.length > 0 && TodoItems.map((item, index) => {
            return <TodoItem item={item}
              key={index}
              onClick={this.onItemClicked(item)} />
          })
        }
      </div>
    );
  }

}

export default App;
