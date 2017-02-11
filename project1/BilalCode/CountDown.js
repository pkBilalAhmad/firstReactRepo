class Tameer extends React.Component{
  constructor(props){
    super(props);
    this.state = {time : 90}
  }  
  tick(){
    this.setState((e)=>({
      time : e.time + 1
    }))
  }  
  componentDidMount(){
    this.interval = setInterval(()=> this.tick(), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return (
      <div>
        The remain Time is {this.state.time}
      </div>
    )
  }
}
ReactDOM.render(
  <Tameer/>,
  root
)


/*
class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = { time : 90 }
  }
  tick(){
    this.setState((e)=>({
      time : e.time + 1
    }))
  }
  componentDidMount(){
    this.interval = setInterval(()=> this.tick(),1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return (
      <div>
        Time elapsed : {this.state.time}
      </div>
    )
  }
}

ReactDOM.render(
  <Timer/>,
  root
)*/