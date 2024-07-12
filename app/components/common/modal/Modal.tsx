// components/Modal.tsx

import React, { ReactNode } from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
interface CustomStyles {
  overlay: {
    [key: string]: string;
  };
  content: {
    [key: string]: string;
  };
}
const customStyles: CustomStyles = {
  overlay: {
    transition: 'opacity 0.9s easeIn', // Smooth transition for overlay
    position: "fixed",
    inset: "0px",
    zIndex: "9999",
    background: "rgba(53, 10, 188, 0.15)",
backdropFilter: "blur(3px)"
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '25px',
    borderRadius: "26.944px",
    background: "#FFF",
    border:"none",
    maxHeight: '90vh',
    maxWidth: '1279px',
    width: "100%",
    overflow: 'auto',
    transition: 'transform 0.9s easeIn', // Smooth transition for modal content
    screenY:'transparent'
  },
};

const MyModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal

      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className='flex justify-end items-end absolute right-[14px] top-[14px] '>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
      </div>
      {children}
    </Modal>
  );
};

export default MyModal;
