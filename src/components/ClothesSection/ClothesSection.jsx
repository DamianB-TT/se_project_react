import { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function ClothesSection({ items, handleCardClick, handleAddClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = items.filter((item) => item.owner === currentUser?._id);

  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__text">Your items</p>
        <button onClick={handleAddClick} className="clothes-section__button">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {userItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={handleCardClick}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
