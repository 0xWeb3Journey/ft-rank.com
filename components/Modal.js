import React from 'react';
import ReactModal from 'react-modal';

function Modal({ isOpen, onRequestClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
    //   onRequestClose={onRequestClose}
      contentLabel="Modal"
    >
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={onRequestClose}>Close</button>
    </div>
      {children}
    </ReactModal>
  );
}

export default Modal;