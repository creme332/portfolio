import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "../../../utils/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000 * 60, // 1 hour
  uniqueTokenPerInterval: 10, // Max 10 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query;

  // Handle only POST method
  if (req.method !== "POST") {
    return res.status(405).send({ error: "Only POST requests allowed" });
  }

  // Check that token is not null
  if (!token || Array.isArray(token)) {
    return res.status(400).json({ error: "Missing token when calling API" });
  }

  // Ensure that email sending limit has not been exceeded.
  try {
    await limiter.check(res, 3, "CACHE_TOKEN"); // 3 requests per hour

    if (!req.body.name || !req.body.subject || !req.body.message) {
      return res
        .status(400)
        .json({ error: "Missing name, subject, or message" });
    }

    const sanitizedParams = {
      name: req.body.name.trim(),
      subject: req.body.subject.trim(),
      message: req.body.message.trim(),
      email:
        req.body.email.trim().length === 0
          ? "Not specified"
          : req.body.email.trim(),
    };

    // validate name length
    if (sanitizedParams.name.length < 2 || sanitizedParams.name.length > 100) {
      return res
        .status(400)
        .json({ error: "Invalid number of characters in name." });
    }

    // validate subject length
    if (
      sanitizedParams.subject.length < 5 ||
      sanitizedParams.subject.length > 100
    ) {
      return res
        .status(400)
        .json({ error: "Invalid number of characters in subject." });
    }

    // validate message length
    if (
      sanitizedParams.message.length < 100 ||
      sanitizedParams.message.length > 5000
    ) {
      return res
        .status(400)
        .json({ error: "Invalid number of characters in message." });
    }

    // using recaptcha token verify if user is valid
    const isUserValid = await verifyRecaptchaToken(token);
    if (!isUserValid) {
      return res.status(400).json({ error: "Failed reCaptcha" });
    }
    return res.status(200).send({ message: "Message delivered successfully." });

    // setup connection to send email
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (error) {
        return res.status(500).json({
          error: `Server was not able to connect to gmail. ${JSON.stringify(
            error
          )}`,
        });
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    // initialise mail data
    const mailData = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Contact Message: ${sanitizedParams.subject}`,
      text: sanitizedParams.message,
      html: `
      <p>You have a new message from ${sanitizedParams.name}:</p>
      <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">${sanitizedParams.message}</p>
      <p>Email: ${sanitizedParams.email}</p>
      <p><em>This email was sent from the contact page of your portfolio website.</em></p>
      `,
    };

    // send mail
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: err });
      } else {
        console.log(info);
      }
    });

    res.status(200).send({ message: "Message delivered successfully." });
  } catch {
    res.status(429).json({ error: "Rate limit exceeded" });
  }
}

async function verifyRecaptchaToken(token: string) {
  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/contact-form-por-1700317089573/assessments?key=${process.env.API_KEY}`;
  const reqBody = {
    event: {
      token,
      expectedAction: "contactPage",
      siteKey: "6Lda7BMpAAAAAIzp5gPINpkVN3EWZna61CZ5mxYe",
    },
  };
  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/contact-form-por-1700317089573/assessments?key=
  ${process.env.API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  );

  const jsonObj = await response.json();
  console.log(jsonObj);
  return jsonObj.tokenProperties.valid;
}
