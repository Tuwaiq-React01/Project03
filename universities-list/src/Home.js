
import React from 'react'
import UniversitiesList from './components/UniversitiesList'
import Search from './components/Search'


export default function Home(props) {
    return (
        <div>
            <Search handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
            <UniversitiesList universities={props.universities}/>
        </div>
    )
}