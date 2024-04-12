import nodemailer from "nodemailer";
const mail = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// console.log(mail, pass);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: mail,
    pass,
  },
});

export const mailOpton = {
  from: mail,
  to: mail,
};
