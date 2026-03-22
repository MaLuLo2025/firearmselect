import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "FirearmSelect — Find Trusted Dealers & Know Your State Gun Laws",
    template: "%s | FirearmSelect",
  },
  description:
    "The informed firearms directory. Find trusted local dealers, understand state gun laws, and exercise your Second Amendment rights responsibly.",
  keywords: [
    "gun shops near me",
    "FFL dealers",
    "state gun laws",
    "concealed carry",
    "constitutional carry",
    "firearms dealers",
    "shooting ranges",
    "gun laws by state",
  ],
  openGraph: {
    title: "FirearmSelect — Find Trusted Dealers & Know Your State Gun Laws",
    description:
      "The informed firearms directory. Find dealers, understand state laws, own responsibly.",
    url: "https://firearmselect.com",
    siteName: "FirearmSelect",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
