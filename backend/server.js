const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load .env

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "fatimahtariq687@gmail.com", 
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
