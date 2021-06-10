
import React from 'react'
import UniversitiesList from './components/UniversitiesList'
import Search from './components/Search'


export default function Home(props) {
    return (
        <div>
            <UniversitiesList universities={props.universities}/>
        </div>
    )
}