const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");



// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const port = 3003;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "alexekwem@gmail.com",
    pass: "fexrzerbdmnsyntn",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: {email},
    to: "alexekwem@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});