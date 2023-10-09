import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ serviceID, templateID }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [error, setError] = useState("");

    emailjs.init("publicid");

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return regex.test(email);
    };

    const sendMail = async () => {
        setIsLoading(true);

        try {
            if (!name || !email || !comment) {
                setError("Please fill in all fields before submitting.");
                setIsLoading(false);
                return;
            }

            if (!validateEmail(email)) {
                setError("Please enter a valid email address.");
                setIsLoading(false);
                return;
            }

            const params = {
                to_name: name,
                from_name: email,
                message: comment,
            };
            const serviceID = "";
            const templateID = "";

            const response = await emailjs.send(serviceID, templateID, params);

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
            <h1>Contact Us</h1>
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
            {formSent && (
                <p className="success">Your message has been sent!</p>
            )}
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default ContactForm;
