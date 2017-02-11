
var logMixin = {
  _log: function (methodName, args) {
    console.log(this.name + '::' + methodName, args);
  },
  componentWillUpdate: function () {
    this._log('componentWillUpdate', arguments);
  },
  componentDidUpdate: function () {
    this._log('componentDidUpdate', arguments);
  },
  componentWillMount: function () {
    this._log('componentWillMount', arguments);
  },
  componentDidMount: function () {
    this._log('componentDidMount', arguments);
  },
  componentWillUnmount: function () {
    this._log('componentWillUnmount', arguments);
  },
};
var Counter = React.createClass({
  render() {
    return (
      <span>{this.props.coun}</span>
    )
  }
})


var Tr = React.createClass({
  mixins: [logMixin],
  getInitialState() {
    return {
      text: this.props.text
    }
  },
  Tc(ev) {
    this.setState({
      text: ev.target.value
    })
  },
  render() {
    if(this.state.text.length > 0){
      <Counter coun={this.state.text.length}/>
    }
    return (
      <div>
        <textarea value={this.state.text} onChange={this.Tc} />
        <br />        
        
        <Counter coun={this.state.text.length} className='bgC' />
        
      </div>
    )
  }

});

ReactDOM.render(
  <Tr text="Bilal" />,
  document.getElementById('root')
)