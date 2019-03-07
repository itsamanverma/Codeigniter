import React, { Component } from 'react'

class Welcome extends Component
{
    // render()
    // {
    //     return <h1>welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    // }
    render()
    {
        const { name, heroName } = this.props
        // const {State1,state2} = this.state
        return <h1>welcome {name} a.k.a {heroName}</h1>
    }
}
export default Welcome 