
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.tim.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock tim={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);




function Bil(props){
  return(
    <div>
      the Time is {props.bt.toLocaleTimeString()}
    </div>
  )
}
function tick(){
  ReactDOM.render(
    <Bil bt={new Date()}/>,
    document.getElementById('root')
  )
}


setInterval(tick, 1000)