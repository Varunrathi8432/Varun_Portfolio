import { Injectable } from "@angular/core";
import emailjs from "@emailjs/browser";

// Replace these with your actual EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = "service_z25e8mf";
const EMAILJS_TEMPLATE_ID = "template_4an7ky4";
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = "template_5r2e75r"; // replace this
const EMAILJS_PUBLIC_KEY = "BRxpX6VNgyVfuDXQH";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: "root" })
export class EmailService {
  sendContactEmail(data: ContactFormData): Promise<void> {
    const params = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject || "(No subject)",
      message: data.message,
      to_email: "varunrathi8432@gmail.com",
    };

    return emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY)
      .then(() =>
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          params,
          EMAILJS_PUBLIC_KEY,
        ),
      )
      .then(() => undefined);
  }
}
