import S from "./FeedbackForm.module.css";

export function FeedbackForm({ onChange }) {
  const onFieldChange = (name) => (event) => {
    console.log(name, event);
  };
  return (
    <div className={S.container}>
      <div className={S.group}>
        <input
          type="text"
          placeholder="Ваше имя"
          className={S.input}
          onChange={onFieldChange("username")}
        />
      </div>
      <div className={S.group}>
        <input
          type="email"
          placeholder="Email"
          className={S.input}
          onChange={onFieldChange("email")}
        />
      </div>
      <div className={S.group}>
        <textarea
          placeholder="Ваше сообщение"
          className={S.input}
          onChange={onFieldChange("message")}
        />
      </div>
      <div className={S.group}>
        <label className={S.checkbox}>
          <input type="checkbox" />
          Принимаю политику обработки данных
        </label>
      </div>
    </div>
  );
}
