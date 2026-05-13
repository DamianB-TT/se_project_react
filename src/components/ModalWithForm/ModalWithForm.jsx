import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  titleText,
  onClose,
  name,
  isOpen,
  onSubmit,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{titleText}</h2>
        <button
          onClick={onClose}
          className="modal__close"
          type="button"
        ></button>
        <form onSubmit={onSubmit} name={name} className="modal__form">
          {children}
          <button className="modal__submit-btn" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
