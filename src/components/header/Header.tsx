import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="header">
      <img className="header_logo" src="../img/logo.svg" alt="logo" />

      <div className="header_right">
        <a className="header_right_link" href="#focuswall">
          Фокусволи
        </a>
        <a className="header_right_link" href="#cube">
          Куби
        </a>
        <a className="header_right_link" href="#winder">
          Віндери
        </a>
        <a className="header_right_link" href="#contact">
          Контакти
        </a>
      </div>

      <div className="header_rightMobile" onClick={() => setIsOpen(true)}>
        <img src="../img/menu.svg" alt="menu icon" />
      </div>

      <div className={`header_side ${isOpen && "header_sideOpen"}`}>
        <div className="header_side_close" onClick={() => setIsOpen(false)}>
          <img src="../img/close.svg" alt="close menu icon" />
        </div>
        <a
          className="header_right_link"
          href="#focuswall"
          onClick={() => setIsOpen(false)}
        >
          Фокусволи
        </a>
        <a
          className="header_right_link"
          href="#cube"
          onClick={() => setIsOpen(false)}
        >
          Куби
        </a>
        <a
          className="header_right_link"
          href="#winder"
          onClick={() => setIsOpen(false)}
        >
          Віндери
        </a>
        <a
          className="header_right_link"
          href="#contact"
          onClick={() => setIsOpen(false)}
        >
          Контакти
        </a>
      </div>
    </header>
  );
}

export default Header;
