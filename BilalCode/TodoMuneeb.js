var container = document.getElementById('container');
var TodoItems = React.createClass({
    render: function () {
        var todoEntries = this.props.entries;
        var todoList = todoEntries.map(function (todo) {
            return <li key={todo.key} >{todo.text}</li>;
        })
        return (
            <div id="hello"> 
            <ul className="theList">{todoList}</ul>
            </div>
        )
    }
})
var TodoAppCom = React.createClass({
    getInitialState: function (ev) {
        return {
            todos: []
        }
    },
    addTodo: function (e) {
        var todoArray = this.state.todos;
        todoArray.push(
            {
                text: this._inputElement.value,
                key: Date.now(),
            }
        )
        this.setState({
            todos: todoArray,
        })
        this._inputElement.value = "";
        e.preventDefault();
    },

    render: function () {
        return (
            <div className="TodoMain">
                <div id="head">
                    <form onSubmit={this.addTodo}>
                        <input ref={(a) => this._inputElement = a} type="text" placeholder="Write your text here" className="form-control">
                        </input>
                        <br></br>
                        <input type="submit" value="Add" className="btn btn-primary" >
                        </input>
                    </form>
                </div>
                <TodoItems entries={this.state.todos}/>
            </div>
        );
    }
})

ReactDOM.render(
    <TodoAppCom />,
    container
)