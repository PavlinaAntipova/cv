import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Overlay, StyledModal } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ toggleModal, children }) => {

    const onEsc = (e) => {
    if (e.code === "Escape") {
      toggleModal();
}
  }

  const onScroll = () => {
    window.scrollTo(0,0);
  }
    
      const onOverlay = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
   }
    
 useEffect(() => {
    
    window.addEventListener("keydown", onEsc);
    window.addEventListener('scroll', onScroll);

    return () => {
    
    window.removeEventListener("keydown", onEsc);
    window.removeEventListener('scroll', onScroll);
    }
  }, []);

   return createPortal(<Overlay onClick={onOverlay}>
       <StyledModal>
         {children}
       </StyledModal>
     </Overlay>, modalRoot);
}

export default Modal;