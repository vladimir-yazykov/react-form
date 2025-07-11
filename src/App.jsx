import "./App.css";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { Modal } from "./components/Modal/Modal";

function App() {
  return (
    <>
      <FeedbackForm />
      <Modal show>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed,
        minima cum aspernatur voluptate tenetur, dicta provident minus debitis
        rem esse enim. Tempore, doloremque veniam unde iste ipsa ea distinctio.
      </Modal>
    </>
  );
}

export default App;
