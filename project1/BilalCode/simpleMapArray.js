import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


var arr = ['Bilal','Ahmad','Khan','Ali','Akram','Ali'];

var MyArr = arr.map((b,name)=>
  <li key={name}>{b}</li>
)

var Ele = <MyArr/>


ReactDOM.render(
  <ul>
    {MyArr}
  </ul>,
  document.getElementById('root')
)