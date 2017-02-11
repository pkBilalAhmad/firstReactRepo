
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = { time : 0 }    
  }
  Tick(){
    this.setState((e) => ({
      time : e.time + 1
    }));
  }
  componentDidMount(){
    this.interval = setInterval(()=> this.Tick(),1000)
  }
  render(){
    return (
      <div>
        Your CountDown is Start {this.state.time}
      </div>
    )
  }
}


var TextArea = RC({
  getInitialState(){
    return {
      name : this.props.name
    }
  },
  Tch(e){
    this.setState({
      name : e.target.value
    })
  },
  render(){
    return (
      <div>
      <textarea value={this.state.name} onChange={this.Tch}/>
      <h3>
        {this.state.name.length}
        
      </h3>
    </div>
    )
  }
})
class Sections extends React.Component{
  render(){
    return (
      <div id='cont'>
        <Navbar/>
        <h2 id='pk'>Pakistan ZindaAbad</h2>
        <div className='row'>
          <div id='f' className='col-sm-4'>
            <h3 className=''>BootCampers List</h3>
            <Todo/>
          </div>
          <div id='s' className='col-sm-4'>
            <div className='thumbnail'>
              <img src="b.png" alt=""/>
            </div>
            <h3>Bilal React</h3>
            <p>Todo Timer First App</p>
          </div>
          <div id='t' className='col-sm-4'>
            <h3 className=''>React Text Area Counter</h3>            
            <TextArea name='Bilal React Object'/>
            <h1>
              <Counter/>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
function Timer(){
  return (
    <div>
      {new Date().toLocaleTimeString()}
    </div>
  )
}

class Navbar extends React.Component {  
  render() {
    return (
      <div className="">

        <nav className="navbar navbar-inverse  nav-pd">
          <div className='container'>
            <div className="header menu-mov-green">
              <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#wcs-nav">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="#" className="navbar-brand fnt-cr wcs-brnd ">                
              {Timer()}
              </a>
            </div>
            <div className="collapse navbar-collapse" id="wcs-nav">
              <ul className="nav navbar-nav navbar-right menu-red">
                <li><a href="#">About Saylani Welfare</a></li>
                <li><a href="#">BootCampers</a></li>
                <li><a href="#">About Author</a></li>
                <li><a href="#">Contect us</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

class Todo extends React.Component {
  componentDidMount() {
    var ul = document.getElementById('ul'),
      inp = document.getElementById('inp'),
      btn = document.getElementById('btn');
    btn.addEventListener('click', function () {
      if (inp.value !== '') {
        ul.innerHTML += "<li>" + inp.value + "</li>"
        inp.value = '';
        inp.focus()
      } else {
        alert('Please Enter your name first')
      }
    });
    ul.addEventListener('click', function (e) {
      var remove = e.target;
      remove.parentNode.removeChild(remove)
    })
  }
  render() {
    return (
      <div>
        <h2>Bilal Todo React app</h2>
        <input id='inp' placeholder='Please Type your name here' />
        <button id='btn'>Add Name</button>
        <ul id='ul'>
          <li>Bilal Ahmad</li>
          <li>Mughees Ahmad</li>
          <li>Ehsan Khan</li>          
        </ul>
      </div>
    )
  }
}

function OK(){

ReactDOM.render(
  <Sections />,
  root
)
}

setInterval(OK,1000)