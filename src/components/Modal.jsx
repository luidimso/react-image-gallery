import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if(open){
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  // we should pass as dependency paramter (the second paramter of useEffect, the value that we want that, when changes, will make the useEffect run again)

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
