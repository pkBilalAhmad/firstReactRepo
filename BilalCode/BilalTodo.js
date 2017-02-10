var root = document.getElementById('root');
class Todo extends React.Component {
    componentDidMount() {
        document.getElementById('bt').addEventListener('click', function () {
            var inp = document.getElementById('inp');
            var ul = document.getElementById('ul')
            if (inp.value === '') {
                alert("hello empty")
            } else {
                ul.innerHTML += "<li>" + inp.value + "</li>"
                inp.value = ""
                inp.focus()
            }
        });
        var ul =document.getElementById('ul');
        ul.addEventListener('click',function(e){            
            var t = e.target;
            t.parentNode.removeChild(t)
        })
    }
    render() {
        return (
            <div>
                <h2>React Todo App</h2>
                <input id='inp' type="text" />
                <button id="bt">add</button>
                <ul id="ul"></ul>
            </div>
        )
    }
}

ReactDOM.render(
    <Todo />,
    root
)