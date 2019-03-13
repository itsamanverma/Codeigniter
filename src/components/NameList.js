import React from 'react'
import Person from './Person';

function NameList() {
    //     const names = ['Ankita', 'Sandhya', 'Swarna']
    //     const nameList = names.map(name => <h2>{name}</h2>)
    //   return (
    //     <div>
    //           {/* <h2>{names[0]}</h2>
    //           <h2>{names[1]}</h2>
    //           <h2>{names[2]}</h2> */}
    //           <div>{nameList}</div>
    //     </div>
    //   )
    // }
    const names = ['Swarna','Ankita','aayushi']
    const persons = [
        {
            id: 1,
            name: 'Swarna',
            age: 25,
            skill: 'sql'
        },
        {
            id: 2,
            name: 'Sandhya',
            age: 23,
            skill: 'java'
        },
    ]
    // const personList = persons.map(person => <Person person={person} />)
    // return <div>{personList}</div>

    // const personList = persons.map(person => <Person key={person.id} person={person} />)
    // return <div>{personList}</div>

    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    return <div>{nameList}</div>
}
    export default NameList