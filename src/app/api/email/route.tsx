import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const username = process.env.SMTP_USERNAME;
  const password = process.env.SMTP_PASSWORD;
  const myEmail = process.env.EMAIL_ADDRESS;

  console.log("userName: ", username);
  console.log("password: ", password);
  console.log("myEmail: ", myEmail);

  if (
    username === undefined ||
    username === "" ||
    username === null ||
    password === undefined ||
    password === "" ||
    password === null ||
    myEmail === undefined ||
    myEmail === "" ||
    myEmail === null
  ) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "COULD NOT READ ENV VARIABLES",
      },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: username,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false,
    },
    logger: true, // Enable logging
    debug: true, // Show debug output
  });

  // verify connection configuration
  transporter.verify(function (error: any, success: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      subject: "Message from your website",
      html: `
            <h2>This message was sent through your websites contact form</h1>
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Subject: ${subject} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json(
      { message: "Success: email was sent" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error", message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
