import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import Subscriber from './models/subscribers.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(bodyParser.json());

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Mongo connected'))
  .catch((err) => console.log('Mongo error:', err));

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  const exists = await Subscriber.findOne({ email });
  if (exists) return res.status(409).json({ message: "Already subscribed!" });

  const newSub = new Subscriber({ email });
  await newSub.save();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: "New Subscriber!",
    text: `Someone subscribed with email: ${email}`,
  });

  res.status(200).json({ message: "Subscribed successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
