import React, { createContext, useContext, useState } from "react";

// CONTEXT
const ModalContext = createContext({});

// PROVIDER
export default function ModalProvider({ children }) {
  const [modal, setModal] = useState({ visible: false });

  function openModal(payload) {
    setModal({ ...payload, visible: true });
  }

  function closeModal() {
    setModal({ visible: false });
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

// HOOK
export const useModal = () => useContext(ModalContext);
