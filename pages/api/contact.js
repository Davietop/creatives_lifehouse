import { transporter, mailOpton } from "@/config/nodemailer";
import logo from "../../public/mainLogo.png";
const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Document</title>
      </head>
      <body>
        <main
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
    
            font-family: Open Sans, sans-serif;
            padding: 50px;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            "
          >
           
            <h3>Lifehouse Customer Inquiry</h3>
          </div>
    
          <div>
            <h4>Dear Customer Service Team</h4>
            <p>
              A new inquiry has been submitted via the contact form on our website.
              Please find the details below:
            </p>
            <ul>
              <li>Customer Name: ${data.name}</li>
              <li>Email Address: ${data.email}</li>
              <li>Subject: ${data.subject}</li>
            </ul>
    
            <div>
              <h4>Message</h4>
              <p>${data.message}</p>
            </div>
    
            <p>
              Please prioritize this inquiry and respond to the customer as soon as
              possible. If you require any further information or assistance, don't
              hesitate to reach out to me. Thank you for your attention to this
              matter. Best regards,
            </p>
          </div>
        </main>
      </body>
    </html>
    `,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "bad request" });
    }

    try {
      const data2 = await transporter.sendMail({
        ...mailOpton,
        ...generateEmailContent(data),

        subject: data.subject,
      });

      return res.status(200).json({ sucess: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "bad request" });
};
export default handler;
