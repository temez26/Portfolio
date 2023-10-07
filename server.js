import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Replace these with your email configuration
const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address loaded from environment variables
    pass: process.env.EMAIL_PASSWORD, // Your Gmail password loaded from environment variables
  },
};

const transporter = nodemailer.createTransport(emailConfig);

// API endpoint for handling form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, comment } = req.body;

    // Email content
    const mailOptions = {
      from: 'your-email@example.com',
      to: 'recipient@example.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Comment: ${comment}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success status code
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing the form.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
