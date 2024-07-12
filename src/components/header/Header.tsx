import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="header">
      <img className="header_logo" src="../img/logo.svg" />

      <div className="header_right">
        <a className="header_right_link" href="#focuswall">
          Focuswall
        </a>
        <a className="header_right_link" href="#cube">
          Cube
        </a>
        <a className="header_right_link" href="#winder">
          Flag
        </a>
        <a className="header_right_link"  href="#contact">Contact</a>
      </div>

      <div className="header_rightMobile" onClick={() => setIsOpen(true)}>
        <img src="../img/menu.svg" />
      </div>

      <div className={`header_side ${isOpen && "header_sideOpen"}`}>
        <div className="header_side_close" onClick={() => setIsOpen(false)}>
          <img src="../img/close.svg" />
        </div>

        <a
          className="header_right_link"
          href="#focuswall"
          onClick={() => setIsOpen(false)}
        >
          Focuswall
        </a>
        <a
          className="header_right_link"
          href="#cube"
          onClick={() => setIsOpen(false)}
        >
          Cube
        </a>
        <a
          className="header_right_link"
          href="#winder"
          onClick={() => setIsOpen(false)}
        >
          Flag
        </a>
        <a
          className="header_right_link"
          href="#contact"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
