import React, { useState } from "react";
import Axios from "axios";
import * as styles from "./Contact.module.css";

const AddressAndContactFormContainerContentRight = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textValue, settextValue] = useState("");
  const [textError, settextError] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [success, setSuccess] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resetForm = () => {
      setTimeout(() => {
        setSent(false);
      }, 3000);
    };

    let data = {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      text: textValue,
      subject: subjectValue,
    };
    let isValid = true;
    if (nameValue.length < 1) {
      setNameValue("");
      setNameError("Pole imię nie może być puste");
      isValid = false;
    }
    if (phoneValue.length < 1) {
      setPhoneValue("");
      setPhoneError("Pole telefon nie może być puste");
      isValid = false;
    }
    if (emailValue.includes("@") === false) {
      setEmailValue("");
      setEmailError("Pole email musi zawierać znak @");
      isValid = false;
    }
    if (subjectValue.length < 1) {
      setSubjectValue("");
      setSubjectError("To pole nie może być puste");
      isValid = false;
    }
    if (textValue.length < 1) {
      settextValue("");
      settextError("To pole nie może być puste");
      isValid = false;
    }
    if (isValid) {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await res.json();

        if (result.success) {
          setSuccess("Wiadomość wysłana pomyślnie");
          setIsValid(true);
          setSent(true);
          resetForm();
        } else {
          console.error("Błąd wysyłki");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <section className={styles.addressAndContactFormContainerContentRight}>
      {isValid === false ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            placeholder="Imię lub nazwa firmy*"
          ></input>
          <p>{nameError}</p>
          <input
            type="text"
            name="phone"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
            placeholder="Telefon*"
          ></input>
          <p>{phoneError}</p>
          <input
            type="text"
            name="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Email*"
          ></input>
          <p>{emailError}</p>
          <input
            type="text"
            name="subject"
            value={subjectValue}
            onChange={(e) => setSubjectValue(e.target.value)}
            placeholder="Temat*"
          ></input>
          <p>{subjectError}</p>
          <textarea
            name="text"
            value={textValue}
            onChange={(e) => settextValue(e.target.value)}
            placeholder="Treść wiadomości*"
          ></textarea>
          <p>{textError}</p>
          <button>Wyślij</button>
        </form>
      ) : (
        <h1 style={{ alignSelf: "center", margin: "0 auto" }}>{success}</h1>
      )}
    </section>
  );
};

export default AddressAndContactFormContainerContentRight;
