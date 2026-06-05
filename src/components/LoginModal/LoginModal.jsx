import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const defaultValues = { email: "", password: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      handleReset();
      setError("");
    }
  }, [isOpen]);

  const handleFieldChange = (e) => {
    handleChange(e);
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values).catch(() => setError("Email or password incorrect"));
  };

  const isFormValid = values.email && values.password;

  return (
    <ModalWithForm
      titleText="Log In"
      name="login"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onAltClick={onRegisterClick}
      altText="or Sign Up"
      isFormValid={isFormValid}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          placeholder="Email"
          name="email"
          required
          value={values.email}
          onChange={handleFieldChange}
        />
      </label>
      <label className="modal__label">
        {error ? "Incorrect password" : "Password"}
        <input
          type="password"
          className="modal__input"
          placeholder="Password"
          name="password"
          required
          value={values.password}
          onChange={handleFieldChange}
        />
      </label>
      {error && <p className="modal__error">{error}</p>}
    </ModalWithForm>
  );
}

export default LoginModal;
