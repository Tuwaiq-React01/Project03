import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 white">
        <span className="black">Faceify</span> detects a face in any image by
        the power of Ai 👽
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            placeholder="https://google.com/person.png"
            type="tex"
            onChange={onInputChange}
          />
          <button
            style={{ backgroundColor: '#2196f3' }}
            className="w-30 grow f4 link ph3 pv2 dib white"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
