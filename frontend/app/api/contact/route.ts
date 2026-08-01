import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBody(
  body: unknown
): { valid: true; data: ContactFormBody } | { valid: false; error: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body." };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { valid: false, error: "Name is required." };
  }

  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return { valid: false, error: "Email is required." };
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return { valid: false, error: "Please enter a valid email address." };
  }

  if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
    return { valid: false, error: "Subject is required." };
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { valid: false, error: "Message is required." };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    },
  };
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = validateBody(body);

    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { name, email, subject, message } = result.data;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      console.error("CONTACT_EMAIL environment variable is not set.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: [contactEmail],
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch {
    console.error("Contact API unexpected error.");
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
