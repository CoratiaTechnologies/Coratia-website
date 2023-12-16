import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coratia Technologies Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
