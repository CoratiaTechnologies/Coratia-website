import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coratia Technologies Ltd.",
  description:
    "Coratia Technologies Pvt. Ltd. is a trailblazing company specializing in underwater robotics. We offer comprehensive solutions in the field of Remotely Operated Vehicles (ROVs) and Autonomous Underwater Vehicles (AUVs), catering to a wide range of underwater challenges using cutting-edge technologies.",
  keywords: [
    "coratia",
    "underwater",
    "robotics",
    "rov",
    "auv",
    "subsea",
    "marine",
    "exploration",
    "ocean",
    "engineering",
    "inspection",
    "offshore",
    "drones",
    "aquatic",
    "innovations",
    "deepsea",
    "automation",
    "imaging",
    "intervention",
    "hydrodynamic",
    "sensing",
    "design",
    "integration",
    "services",
    "technology",
    "solutions",
    "hydrographic",
    "surveys",
    "vehicles",
    "sensors",
    "oceanographic",
    "India",
    "NIT Rourkela",
  ],
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
