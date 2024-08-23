import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './Popup.scss';

Modal.setAppElement('#root');

function CustomModal({ isOpen, onRequestClose, title, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          zIndex: 1000,
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '12px',
          maxWidth: '700px',
          padding: '0',
          width: '100%',
        },
      }}
    >
      <div className="popup dark:bg-slate-700 text-black p-10 dark:text-white overflow-y-auto">
        <button
          className="popup-close-button"
          onClick={onRequestClose}
          aria-label="close popup"
        >
          ✕
        </button>
        {children}
      </div>
    </Modal>
  );
}

export default CustomModal;
