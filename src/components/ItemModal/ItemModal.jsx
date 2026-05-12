import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, name, handleDelete }) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <div className="modal__image-wrapper">
          <button
            onClick={onClose}
            className="modal__close_type_image"
            type="button"
          ></button>
          <img src={card.imageUrl} alt={card.name} className="modal__image" />
        </div>
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <p onClick={() => handleDelete(card)} className="modal__delete">
            Delete item
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
