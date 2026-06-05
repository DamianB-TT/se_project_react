import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegister, onLoginClick }) {
  const defaultValues = { name: "", avatar: "", email: "", password: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) handleReset();
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  const isFormValid =
    values.email && values.password && values.name && values.avatar;

  return (
    <ModalWithForm
      titleText="Sign Up"
      name="register"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onAltClick={onLoginClick}
      altText="or Log In"
      isFormValid={isFormValid}
    >
      <label className="modal__label">
        Email *
        <input
          type="email"
          className="modal__input"
          placeholder="Email"
          name="email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password *
        <input
          type="password"
          className="modal__input"
          placeholder="Password"
          name="password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          placeholder="Name"
          name="name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          name="avatar"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
