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
  const [isSent, setIsSent] = useState<boolean>(false);
  const [values, setValues] = useState<ValuesType>({
    name: "",
    phone_number: "",
    purpose: "Запитання",
    comment: "",
  });
  const [errors, setErrors] = useState<ValuesType>({
    name: "",
    phone_number: "",
    purpose: "Запитання",
    comment: "",
  });

  // const handleSetValue = (value: string, key: string) => {
  //   setValues((el: ValuesType) => ({ ...el, [key]: value }));
  //   setErrors((el: ValuesType) => ({ ...el, [key]: "" }));
  // };

  const handleSetValue = (value: string, key: string) => {
    if (key === "phone_number") {
      if (value.length === 14) value = value.slice(0, -1);
      if (value === "+38") value = "+380";
      if (!value.startsWith("+380") && !value.includes("+380")) {
        value = "+380" + value.replace(/^0+/, "");
      }
    }
    setValues((el: ValuesType) => ({ ...el, [key]: value }));
    setErrors((el: ValuesType) => ({ ...el, [key]: "" }));
  };
  const areValuesNotEmpty = (obj: any): boolean => {
    Object.keys(obj).map((key: string) => {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [key]: obj[key] === "" ? "error" : "",
      }));
    });

    return Object.values(obj).every((value) => value !== "");
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    if (!validatePhoneNumber(values.phone_number)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone_number: "Invalid phone number",
      }));
      return;
    }

    if (!isSent && !isLoading && areValuesNotEmpty({ ...values })) {
      setIsLoading(true);

      const res = await handleSendLetter({ ...values });

      if (res.data) {
        setIsLoading(false);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 2000);

        setValues({
          name: "",
          phone_number: "",
          purpose: "Запитання",
          comment: "",
        });
      }
    }
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^\+380\d{9}$/;
    return phoneRegex.test(phoneNumber);
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
        style={{
          border: ` ${errors.name !== "" ? "1px solid red" : "none"}`,
        }}
      />
      <h3 className="form-title">Номер телефону</h3>
      <label htmlFor="phoneNumber" className="visually-hidden">
        Номер телефону
      </label>
      <input
        id="phoneNumber"
        type="tel"
        className="form-input phone-input"
        placeholder="+380"
        value={values["phone_number"]}
        inputMode="numeric"
        onChange={(e: any) => handleSetValue(e.target.value, "phone_number")}
        style={{
          border: ` ${errors.phone_number !== "" ? "1px solid red" : "none"}`,
        }}
      />
      <h3 className="form-title">Коментарі</h3>
      <label htmlFor="comments" className="visually-hidden">
        Коментарі
      </label>
      <textarea
        id="comments"
        className="form-textarea"
        placeholder="Коментарі"
        value={values["comment"]}
        onChange={(e: any) => handleSetValue(e.target.value, "comment")}
        style={{
          border: ` ${errors.comment !== "" ? "1px solid red" : "none"}`,
        }}
      ></textarea>

      <button
        type="submit"
        className="submit-button"
        style={isLoading ? { opacity: `0.5`, pointerEvents: "none" } : {}}
      >
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <>{isSent ? "Відправлено!" : "Зв'язатись"}</>
        )}
      </button>
      <style jsx>{`
        .contact-form {
          border-radius: 20px;
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
          margin-top: 15px;
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
            margin: 40px 20px 0px;
            padding: 0 20px;
          }
          .form-title {
            max-width: 100%;
            margin-top: 10px;
            font-size: 15px;
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
            margin-bottom: 20px;
            margin-top: 10px;
          }
        }
        @media (max-width: 640px) {
          .contact-form {
            margin: 0 30px;
          }
          .phone-input {
            margin-top: 10px;
            padding-right: 154px;
            margin-bottom: 10px;
          }
          .form-textarea {
            margin-top: 10px;
            padding-bottom: 29px;
          }
          .submit-button {
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .form-title {
            margin-top: 10px;
            font-size: 12px;
          }
        }
        @media (max-width: 400px) {
          .contact-form {
            margin: 0 20px;
          }
          .phone-input {
            margin-top: 10px;
            padding-right: 120px;
          }
          .form-textarea {
            margin-top: 10px;
            padding-bottom: 15px;
          }
          .submit-button {
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .form-title {
            margin-top: 7px;
            font-size: 9px;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
