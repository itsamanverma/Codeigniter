import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1> Show the difference b/w js and jsx</h1>
    //     </div>
    // )

    // return 
    // (
    // <div className = 'dummyClass'>
    //         <h1>show the difference b/w js and jsx</h1>
    // </div>
    // )

    return React.createElement('div'
                               ,{id: 'hello',className :'dummyClass'},
                               React.createElement('h1', null, 'Hello EveryOne,welcome..!'))
}

export default Hello