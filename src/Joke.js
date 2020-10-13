import React from 'react'

function Joke(props){
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question:{props.question}</h3>
    <h3 style={{color: !props.question && "grey"}}>Answer:{props.punchline}</h3>
    <br/>
        </div>
    )
}
export default Joke