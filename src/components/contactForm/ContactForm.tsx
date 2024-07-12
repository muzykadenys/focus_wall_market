import useMail from "@/hooks/useMail";
import React, { useState } from "react";

interface ValuesType {
  name: string;
  phone_number: string;
  purpose: string;
  comment: string;
}

const ContactForm = () => {
  const { handleSendLetter } = useMail();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState<ValuesType>({
    name: "",
    phone_number: "",
    purpose: "",
    comment: "",
  });

  const handleSetValue = (value: string, key: string) => {
    setValues((el: ValuesType) => ({ ...el, [key]: value }));
  };

  const areValuesNotEmpty = (obj: ValuesType): boolean => {
    return Object.values(obj).every((value) => value !== "");
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    if (!isLoading && areValuesNotEmpty(values)) {
      setIsLoading(true);

      const res = await handleSendLetter({ ...values });

      if (res.data) {
        setIsLoading(false);

        setValues({
          name: "",
          phone_number: "",
          purpose: "",
          comment: "",
        });
      }
    }
  };

  return (
    <form className="contact-form" onSubmit={handleOnSubmit}>
      <h3 className="form-title">Контактні дані</h3>
      <label htmlFor="fullName" className="visually-hidden">
        ПІБ
      </label>
      <input
        id="fullName"
        type="text"
        className="form-input"
        placeholder="ПІБ"
        value={values["name"]}
        onChange={(e: any) => handleSetValue(e.target.value, "name")}
      />
      <label htmlFor="phoneNumber" className="visually-hidden">
        Номер телефону
      </label>
      <input
        id="phoneNumber"
        type="tel"
        className="form-input phone-input"
        placeholder="+380"
        value={values["phone_number"]}
        onChange={(e: any) => handleSetValue(e.target.value, "phone_number")}
      />
      <label htmlFor="reason" className="visually-hidden">
        Причина звернення
      </label>
      <input
        id="purpose"
        type="text"
        className="form-input phone-input"
        placeholder="Причина звернення"
        value={values["purpose"]}
        onChange={(e: any) => handleSetValue(e.target.value, "purpose")}
      />
      <label htmlFor="comments" className="visually-hidden">
        Коментарі
      </label>
      <textarea
        id="comments"
        className="form-textarea"
        placeholder="Коментарі"
        value={values["comment"]}
        onChange={(e: any) => handleSetValue(e.target.value, "comment")}
      ></textarea>

      <button
        type="submit"
        className="submit-button"
        style={isLoading ? { opacity: `0.5`, pointerEvents: "none" } : {}}
      >
        {isLoading ? <div className="loader"></div> : "Зв'язатись"}
      </button>
      <style jsx>{`
        .contact-form {
          border-radius: 30px;
          border: 2px solid rgba(187, 231, 62, 1);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 19px;
          color: #fff;
          font-weight: 900;
          text-align: center;
          padding: 20px 30px;
        }
        .form-title {
          font-family: Roboto, sans-serif;
          margin-right: auto;
        }
        .form-input,
        .form-textarea,
        .form-select {
          align-items: start;
          border-radius: 10px;
          background-color: rgba(217, 217, 217, 0.6);
          margin-top: 8px;
          justify-content: center;
          padding: 13px 18px;
          font: 500 14px Inter, sans-serif;
          width: 100%;
        }
        .phone-input {
          margin: 9px 190px 0 0;
        }
        .form-textarea {
          margin-top: 9px;
          padding: 13px 18px 96px;
        }
        .submit-button {
          font-family: Roboto, sans-serif;
          justify-content: center;
          border-radius: 11.652px;
          border: 2px solid rgba(187, 231, 62, 1);
          align-self: start;
          margin-top: 30px;
          padding: 10px 41px;
          background: none;
          color: #fff;
          cursor: pointer;
        }
        .loader {
          width: 20px;
          padding: 3px;
          aspect-ratio: 1;
          border-radius: 50%;
          background: #fff;
          --_m: conic-gradient(#0000 5%, #000),
            linear-gradient(#000 0 0) content-box;
          -webkit-mask: var(--_m);
          mask: var(--_m);
          -webkit-mask-composite: source-out;
          mask-composite: subtract;
          animation: l3 1s infinite linear;
        }
        @keyframes l3 {
          to {
            transform: rotate(1turn);
          }
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (max-width: 991px) {
          .contact-form {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
          .form-title {
            max-width: 100%;
          }
          .form-input,
          .form-textarea,
          .form-select {
            max-width: 100%;
            padding-right: 20px;
          }
          .submit-button {
            white-space: initial;
            padding: 0 20px;
          }
        }
        @media (max-width: 640px) {
          .contact-form {
            margin: 0 30px;
          }
          .phone-input {
            margin-top: 20px;
            padding-right: 154px;
          }
          .form-textarea {
            padding-bottom: 29px;
          }
          .submit-button {
            margin-top: 20px;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
