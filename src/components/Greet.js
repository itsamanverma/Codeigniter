import React from 'react'
/**
 * this is simple stateless functional components
 * @retrnu html values which defines UI
 */
// function Greet()
// {
//     return <h1>Hello EveryOne</h1>
// }

/**
 * write the same stateless function component using ES6 features
 * @return html
 */
// const Greet = (props) => {
//     console.log(props)
//     return <h1> Hello {props.name} a.k.a {props.heroName}</h1>
// }

// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>
//                 Hello {props.name} a.k.a {props.heroName}
//             </h1>
//             {props.children}
//         </div>
//     )
// }
const Greet = props => {
    const {name ,heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}
export default Greet
