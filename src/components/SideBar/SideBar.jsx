import { useContext } from "react";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function SideBar({ onEditProfileClick, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        {currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar sidebar__avatar_placeholder">
            {currentUser?.name?.charAt(0).toUpperCase()}
          </div>
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__buttons">
        <button
          type="button"
          className="sidebar__btn"
          onClick={onEditProfileClick}
        >
          Change profile data
        </button>
        <button
          type="button"
          className="sidebar__btn sidebar__btn_type_logout"
          onClick={onSignOut}
        >
          Log out
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
