import React from 'react';

const SearchArea = (props) => {
    return (
        
        <div className="container">
        <div className="row">
        <section className="col s4 offset-s4">
        <form action="" onSubmit={props.handleSubmit}>
        <div class="input-field">
            <input placeholder="Search for a movie" type="text" onChange={props.handleChange}/> 
        </div>
        </form>
        </section>
        </div>
        </div>
       
    )
}

export default SearchArea;