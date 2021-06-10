import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="w-5/6 mx-auto p-4 flex justify-between items-baseline">
                <div className="text-4xl font-bold"><span>♫</span> Music</div>
                <div>
                    <div className="text-gray-700 text-xs">made with ♥︎ by hanan</div>
                </div>
                
            </div>
        )
    }
}
