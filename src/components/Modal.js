import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, content, children, onDismiss }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{children}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
