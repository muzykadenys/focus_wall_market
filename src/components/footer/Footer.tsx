import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/652587586ed8c9c40c663883dfd331c9b2fd78ec8ef16b33a9665a9b65d6261e?apiKey=7374bd4ef68f4d8dac38ea324bb72463&"
          className="footer-logo"
          alt="Company logo"
        />
        <nav className="footer-nav">
          <a href="#" className="nav-link">
            Focuswall
          </a>
          <a href="#" className="nav-link">
            Cube
          </a>
          <a href="#" className="nav-link">
            Flag
          </a>
        </nav>
        <div className="contact-info">
          <a href="mailto:orfer@toptrend.com.ua" className="email">
            orfer@toptrend.com.ua
          </a>
          <a href="tel:+380673145515" className="phone-1">
            + 380 (67) 314-55-15
          </a>
          <a href="tel:+380673145500" className="phone-2">
            + 380 (67) 314-55-00
          </a>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #000;
          display: flex;
          margin-top: 91px;
          width: 100%;
          align-items: center;
          font-size: 19px;
          color: #fff;
          justify-content: center;
          padding: 23px 60px;
        }
        .footer-content {
          display: flex;
          width: 100%;
          max-width: 1128px;
          align-items: center;
          gap: 20px;
          justify-content: space-between;
        }
        .footer-logo {
          aspect-ratio: 0.83;
          object-fit: auto;
          object-position: center;
          width: 52px;
          align-self: stretch;
          margin: auto 0;
        }
        .footer-nav {
          align-self: stretch;
          display: flex;
          gap: 20px;
          font-weight: 600;
          white-space: nowrap;
          text-align: center;
          justify-content: space-between;
          margin: auto 0;
        }
        .nav-link {
          font-family: Roboto, sans-serif;
          color: #fff;
          text-decoration: none;
        }
        .contact-info {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          font-weight: 500;
          text-align: right;
        }
        .email,
        .phone {
          font-family: Inter, sans-serif;
          color: #fff;
          text-decoration: none;
        }
        .phone {
          margin-top: 14px;
        }
        @media (max-width: 991px) {
          .footer {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
          .footer-content {
            max-width: 100%;
            flex-wrap: wrap;
          }
          .footer-nav {
            white-space: initial;
          }
          .email{
            margin-top:18px;
          }
          .phone-1{
            margin-top:5px;

          }
          .phone-2{
            margin-top:5px;
            margin-bottom:18px;
          }
        }
        @media (max-width: 640px) {
          .footer-logo {
            width: 30px;
          }
          .footer-nav {
            margin-right: auto;
          }
          .nav-link {
            font-size: 10px;
            margin: 0 auto 0 20px;
          }
          .nav-link:nth-child(2) {
            margin: 0 auto 0 5px;
          }
          .nav-link:last-child {
            margin-left: 5px;
          }
          .contact-info {
            font-size: 9px;
          }
          .email{
            margin-top:13px;
          }
          .phone-1{
            margin-top:2px;

          }
          .phone-2{
            margin-top:2px;
            margin-bottom:13px;
          }
        }
        @media (max-width: 400px) {
          .footer-logo {
            width: 30px;
          }
          .footer-nav {
            margin-right: auto;
          }
          .nav-link {
            font-size: 8px;
            margin: 0 auto 0 10px;
          }
          .nav-link:nth-child(2) {
            margin: 0 auto 0 5px;
          }
          .nav-link:last-child {
            margin-left: 5px;
          }
          .contact-info {
            font-size: 8px;
          }
          .email{
            margin-top:8px;
          }
          .phone-1{
            margin-top:2px;

          }
          .phone-2{
            margin-top:2px;
            margin-bottom:9px;
          }
          
        }
      `}</style>
    </footer>
  );
};

export default Footer;
