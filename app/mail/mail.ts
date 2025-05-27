"use server";
import nodemailer from "nodemailer";

type Props = {
  firstName: string;
  secondName: string;
  email: string;
  message: string;
};

export async function sendMail({
  firstName,
  secondName,
  email,
  message,
}: Props) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_OUR_EMAIL,
      pass: process.env.NEXT_PUBLIC_OUR_PASSWORD,
    },
  });

  try {
    await transport.verify();
    await transport.sendMail({
      from: process.env.NEXT_PUBLIC_OUR_EMAIL,
      to: [
        process.env.NEXT_PUBLIC_ADMIN1_EMAIL,
        process.env.NEXT_PUBLIC_ADMIN2_EMAIL,
      ].join(","),
      subject: "Nova poruka sa remenex sajta.",
      html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb; color: #111827;">
                <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); overflow: hidden;">
                <div style="padding: 24px; background-color: #111827; color: white;">
                    <h2 style="margin: 0;">📬 Nova poruka sa Remenex sajta</h2>
                </div>
                <div style="padding: 24px;">
                    <p><strong>Ime:</strong> ${firstName} ${secondName}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
                    <p><strong>Poruka:</strong></p>
                    <div style="margin-top: 12px; padding: 16px; background-color: #f3f4f6; border-radius: 6px; color: #374151;">
                    ${message.replace(/\n/g, "<br />")}
                    </div>
                </div>
                <div style="padding: 16px 24px; background-color: #f9fafb; text-align: center; font-size: 12px; color: #6b7280;">
                    Ova poruka je poslata automatski sa <strong>remenex.com</strong>
                </div>
                </div>
            </div>
        `,
    });
    return "Success";
  } catch (error) {
    if (error instanceof Error) return "Error";
  }
}
