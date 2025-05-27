import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { Bounce, ToastContainer } from "react-toastify";
import "./globals.css";
import { getUserLocale } from "./services/locale";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getUserLocale();
  const isSerbian = locale === "sr";

  return {
    title: isSerbian
      ? "Remenex - Prilagođeni softver i IT konsalting."
      : "Remenex - Custom Software Development & IT Consulting",
    description: isSerbian
      ? "Remenex je kompanija za razvoj softvera i IT konsalting. Pomažemo firmama da rastu kroz digitalna rešenja prilagođena njihovim potrebama."
      : "Remenex is a software development and IT consulting company that helps businesses grow with tailored digital solutions.",
    openGraph: {
      url: "https://www.remenex.com",
      title: isSerbian
        ? "Remenex - Softverski razvoj i IT konsalting"
        : "Remenex - Custom Software Development & IT Consulting",
      description: isSerbian
        ? "Remenex isporučuje pouzdana softverska rešenja po meri za vaše poslovanje."
        : "Remenex delivers reliable and scalable software solutions tailored to your business needs.",
      images: [{ url: "https://remenex.com/images/logo.png" }],
    },
    keywords: isSerbian
      ? "razvoj softvera, softverska kompanija, IT konsalting, digitalna transformacija, izrada aplikacija, softverski outsourcing"
      : "software development company, custom software development, IT consulting, web and mobile app development, digital transformation, software outsourcing",
  };
}

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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
