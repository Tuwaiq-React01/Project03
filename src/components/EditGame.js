import React, { useState } from 'react'


export default function EditGame(props) {

    const [input, setInput] = useState(() => props.game.name)

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    const editGame = (e, input) => {
        e.preventDefault();
        const oldGame = props.game
        props.handleEditGame(oldGame, input)
    }
    return (
        <div>
            <form className="input-group edit-form" >
                <input type="text" value={input} onChange={handleChange} />
                <button className="btn btn-primary" onClick={(e) => editGame(e, input)}>Edit</button>
            </form>
        </div>
    )
}
