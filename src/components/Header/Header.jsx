import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="WTWR Logo" className="header__logo" />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <NavLink className="header__nav-link" to="/profile">
            <div className="header__user-container">
              <p className="header__username">{currentUser?.name}</p>
              {currentUser?.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar header__avatar_placeholder">
                  {currentUser?.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </NavLink>
        </>
      ) : (
        <div className="header__auth-buttons">
          <button
            onClick={onRegisterClick}
            type="button"
            className="header__btn"
          >
            Sign up
          </button>
          <button
            onClick={onLoginClick}
            type="button"
            className="header__btn"
          >
            Log in
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
