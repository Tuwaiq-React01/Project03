
import React from 'react'
import UniversitiesList from './components/UniversitiesList'



export default function Home(props) {
    return (
        <div className="Home">
          
            <UniversitiesList universities={props.universities}/>
        </div>
    )
}