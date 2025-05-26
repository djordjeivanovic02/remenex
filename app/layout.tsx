import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remenex - Custom Software Development & IT Consulting",
  description: "Remenex is a software development and IT consulting company that helps businesses grow with tailored digital solutions. We deliver reliable, scalable, and innovative software across various industries.",
  openGraph: {
    url: "https://www.remenex.com",
    title: "Remenex - Custom Software Development & IT Consulting",
    description: "Remenex delivers reliable and scalable software solutions tailored to your business needs. Let us help you transform your digital presence.",
    images: [{url: "https://remenex.com/images/logo.png"}]
  },
  keywords: "software development company, custom software development, IT consulting, web and mobile app development, softverska kompanija, razvoj softvera, izrada aplikacija, IT konsalting, digitalna transformacija, softverski outsourcing"

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
       <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
