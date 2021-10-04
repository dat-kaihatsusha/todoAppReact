import React, { Component } from "react";
import classNames from "classnames";
import './TodoItem.css';
import check from "../img/check.svg";
import checked from "../img/checked.svg";



class TodoItem extends Component {

  render() {
    const { item, onClick } = this.props;
    let url = check;
    if (item.isComplete) {
      url = checked;
    }
    return (
      <div className="TodoItem">
        <img  onClick={onClick} className={classNames({
          "img-complete": item.isComplete === true
        })} src={url} width={32}/>
        <p className={classNames({
        'TodoItem-complete': item.isComplete
      })}>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;