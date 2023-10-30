
import React, { useState } from "react";
import emailjs from "emailjs-com";

// ContactForm component for rendering the contact form section
const ContactForm = () => {
  // States for managing form inputs, loading state, form submission status, and errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState("");

  // Retrieving necessary environment variables for email service configuration
  const emailjsServiceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const emailjsTemplateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const emailjsUserID = import.meta.env.VITE_APP_EMAILJS_USER_ID;

  // Initializing emailjs with the user ID
  emailjs.init(emailjsUserID);

  // Function to validate the email format
  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  };

  // Function to send the email
  const sendMail = async () => {
    setIsLoading(true);

    try {
      // Validating form fields
      if (!name || !email || !comment) {
        setError("Please fill in all fields before submitting.");
        setIsLoading(false);
        return;
      }

      // Validating email format
      if (!validateEmail(email)) {
        setError("Please enter a valid email address.");
        setIsLoading(false);
        return;
      }

      // Constructing email parameters
      const params = {
        to_name: name,
        from_name: email,
        message: comment,
      };

      // Sending email using emailjs
      const response = await emailjs.send(emailjsServiceID, emailjsTemplateID, params);

      // Handling form submission response
      if (response.status === 200) {
        setFormSent(true);
        setName("");
        setEmail("");
        setComment("");
      } else {
        setError("An error occurred while submitting the form.");
      }
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  
  return (
    <form>
      <h1>Contact Me</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />
      <textarea
        name="comment"
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        autoComplete="off"
      />
      <button type="button" onClick={sendMail} disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit"}
      </button>
      {formSent && <p className="success">Your message has been sent!</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};


export default ContactForm;
