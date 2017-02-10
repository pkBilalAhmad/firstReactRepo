
function Ugreet(){
    return (
        <div>WelCome back</div>
    )
}

function Ggreet(){
    return (
        <div>
            plese sign up first
        </div>
    )
}

function Greet(props){
    const name = props.user;
    if(name){
        return (
            <Ugreet/>
        )
    }
    return (
        <Ggreet/>        
    )

}
ReactDOM.render(
    <Greet user={true}/>,
    root
)