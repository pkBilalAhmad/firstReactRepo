import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
var ul = document.getElementById('ul');
var inp = document.getElementById('inp');
var bt = document.getElementById('bt');
var li1 = "<li>"
var li2 = "<li2>"

var Todo = React.createClass({
  getInitialState() {
    return {
      text: this.props.value
    }
  },
  render() {
    return
    <div>
      <input/>
      <button></button>
      <ul></ul>
    </div>
  },

})
ReactDOM.render(
  <Todo/>,
  document.getElementById('root')
)
