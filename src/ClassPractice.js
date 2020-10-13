import React from 'react'

class Practice extends React.Component{
    constructor(){
        super()
        this.state= {
            isLoggedIn:true

        }
    }
    render(){  
        let logged
        if(this.state.isLoggedIn == true){
            logged = 'in'
        } else{
            logged = 'out'
        }
    return (
        <div>
            <h1>you are currently logged {logged}</h1>
        </div>
    )
    }
}
export default Practice

