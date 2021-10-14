import React from "react";
import { Button } from "antd";

import { useModal } from "../../context/Modal";

export default function HomePage() {
  const { openModal } = useModal();

  function testModal() {
    openModal({ message: "Conteúdo do Modal." });
  }

  return (
    <>
      <h1>Home</h1>

      <Button onClick={testModal} type="primary">
        Modal
      </Button>
    </>
  );
}
