import { useState } from "react";
import "./App.css";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [form, setForm] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    setForm(data);
    setShowModal(true);
  };
  return (
    <>
      <FeedbackForm onSubmit={onSubmit} />
      {form && (
        <Modal title="Спасибо, что пишете!" show={showModal}>
          {form.username}, благодарим вас за заявку! <br />
          Мы отправим ответ на вашу почту {form.email}
        </Modal>
      )}
    </>
  );
}

export default App;
