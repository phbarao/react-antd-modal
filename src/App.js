import ModalProvider from "./context/Modal";
import HomePage from "./pages/Home";
import Modal from "./components/Modal/index.js";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <HomePage />
        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;
