import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className='imageLinkForm-container'>
      <p className='f3'>This magic brain will detect faces in your pictures. Give it a try</p>
      <div className='center'>
        <div className='imageLinkForm'>
          <input placeholder='paste image URL' onChange={onInputChange} className='imageLinkForm-input' type='text' />
          <button onClick={onButtonSubmit} className='imageLinkForm-button'>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
