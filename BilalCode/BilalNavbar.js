import React from 'react';
import ReactDOM from 'react-dom';
import './BCS.css'

var Header = React.createClass({
  render() {
    return (
      <div id='hdrDiv'>
        <div className='hdr'><h2>Bilal React Applicatoin</h2></div>
        <div className='hdr'><h2>Work Hard to Gain success</h2></div>
      </div>
    )
  }
})

var Navbar = React.createClass({
  render() {
    return (
      <div id='nav'>
        <ul id='navUl'>
          <li id='d1'><a href='#'>ReactApps</a>
            <ul id='m1'>
                <li><a href='#'>Quize App</a></li>  
                <li><a href='#'>Quize WebApp</a></li>  
                <li><a href='#'>Quize App</a></li>  
            </ul>          
          </li>
          <li id='d2'><a href='#'>BootCampers</a>
              <ul id='m2'>
                <li><a href='#'>Ehsan Khan</a></li>  
                <li><a href='#'>Mughees Ahmad</a></li>  
                <li><a href='#'>Bilal Ahmad</a></li>  
                <li><a href='#'>Arslan Sabir</a></li>  
                <li><a href='#'>Hasnain Ahmad</a></li>  
                <li><a href='#'>Aazam </a></li>  
                <li><a href='#'></a>Fawad</li>  
                <li><a href='#'>Mubashir Ali</a></li>  
            </ul>
          </li>
          <li  id='d3'><a href='#'>PC Factoreis</a>
            <ul id='m3'>
                <li><a href='#'>Sir Zia Khans Factory</a></li>  
                <li><a href='#'>Sir Zeeshans Factory</a></li>  
                <li><a href='#'>Sir Yousufs Factory</a></li>  
            </ul>
          </li>
          <li><a href='#'>Contect us</a></li>
        </ul>
      </div>
    )
  }
})

var Compos = React.createClass({
  render() {
    return (
      <div>
        <Navbar />        
        <Header />        
      </div>
    )
  }
})


ReactDOM.render(
  // <Header/>,
  <Compos />,
  document.getElementById('root')
)


