import React from 'react';
import PopupLib from 'reactjs-popup';

import './styles.css';

type Props = {
  open: boolean;
  onClose?: () => void;
};
const Popup: React.FC<React.PropsWithChildren<Props>> = ({ children, open, onClose }) => {
  return (
    <PopupLib open={open} onClose={onClose} className="custom-popup" modal>
      {(close): React.ReactElement => (
        <div className="inner-content">
          <span className="close-popup" onClick={close}>
            &times;
          </span>
          {children}
        </div>
      )}
    </PopupLib>
  );
};

export default Popup;
