import React from 'react'
import {ReactComponent as ReactLogo} from '../icons/heart.svg'
export default function Fave (props) {
        return (
            <div className={`fave ${props.isFave? "is-fave" : ""}`} onClick={props.handleFaveToggle} >
            <ReactLogo />
            </div>
        )
    
}
