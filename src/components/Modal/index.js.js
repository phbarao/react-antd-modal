import React from "react";
import { Modal as ModalComponent } from "antd";

import { useModal } from "../../context/Modal";

export default function Modal() {
  const {
    modal: { message, visible },
    closeModal,
  } = useModal();

  return (
    <ModalComponent onCancel={closeModal} onOk={closeModal} visible={visible}>
      <p>{message}</p>
    </ModalComponent>
  );
}
