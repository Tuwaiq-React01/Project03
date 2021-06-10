import React from 'react'
import {ReactComponent as ReactLogo} from '../icons/delete.svg'

export default function Delete(props) {
        return (
            <div className="delete" onClick={props.handleDeleteGame} >
            <ReactLogo />
            </div>
        )
}
