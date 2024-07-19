import React from "react";
import Footer from "../footer/Footer";
import ContactForm from "../contactForm/ContactForm";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">
              Зв'яжіться з нашим <br /> менеджером
            </h2>
            <p className="contact-description">
              Вас зацікавили пропозиції або виникли питання? <br />
              Заповніть форму зворотнього з'язку і наші менеджери <br />
              як найшвидше зв'яжуться з вами
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .contact-section {
          background-color: #282829;
          display: flex;
          width: 100%;
          padding-top: 80px;
          flex-direction: column;
        }
        .contact-container {
          align-self: center;
          width: 100%;
          max-width: 1145px;
        }
        .contact-content {
          gap: 20px;
          display: flex;
        }
        .contact-info {
          display: flex;
          padding-left: 20px;
          flex-direction: column;
          align-self: stretch;
          margin: auto -5px auto 1px;
        }
        .contact-title {
          color: #bbe73e;
          margin-right: -4px;
          font: 900 64px Roboto, sans-serif;
        }
        .contact-description {
          color: rgba(255, 255, 255, 0.6);
          margin-top: 37px;
          font: 500 20px Inter, sans-serif;
        }
        @media (max-width: 400px) {
          .contact-container {
            margin-top: -2px;
            padding: 0 10px;
          }
          .contact-title {
            font-size: 18px;
          }
          .contact-description {
            font-size: 9px;
            margin-top: 8px;
          }
          .contact-content {
            flex-direction: column;
            align-items: stretch;
          }
          .contact-info {
            padding-left: 10px;
          }
        }
        @media (max-width: 991px) {
          .contact-section {
            max-width: 100%;
          }
          .contact-container {
            max-width: 100%;
          }
          .contact-content {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
          .contact-info {
            max-width: 100%;
            margin-top: 40px;
          }
          .contact-title {
            max-width: 100%;
            font-size: 40px;
          }
          .contact-description {
            max-width: 100%;
          }
        }
        @media (max-width: 640px) {
          .contact-container {
            margin-top: -2px;
          }
          .contact-title {
            font-size: 20px;
          }
          .contact-description {
            font-size: 10px;
            margin-top: 10px;
          }
          .contact-info{
            margin-bottom:30px;
          }
        }
        @media (max-width: 400px) {
          .contact-container {
            margin-top: -2px;
          }
          .contact-title {
            font-size: 20px;
          }
          .contact-description {
            font-size: 10px;
            margin-top: 10px;
          }
          .contact-info{
            margin-bottom:20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
