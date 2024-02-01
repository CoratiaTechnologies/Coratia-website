import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://coratia.com"),
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
    "web design",
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://coratia.com/",
    title: "Coratia Technologies Ltd.",
    description:
      "Coratia Technologies Pvt. Ltd. is a trailblazing company specializing in underwater robotics. We offer comprehensive solutions in the field of Remotely Operated Vehicles (ROVs) and Autonomous Underwater Vehicles (AUVs), catering to a wide range of underwater challenges using cutting-edge technologies.",
    images: [
      {
        url: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1705345499/card_yjtbjk.png",
        width: 800,
        height: 600,
      },
    ],
    site_name: "Coratia Technologies Ltd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coratia Technologies Ltd.",
    description:
      "Coratia Technologies Pvt. Ltd. is a trailblazing company specializing in underwater robotics. We offer comprehensive solutions in the field of Remotely Operated Vehicles (ROVs) and Autonomous Underwater Vehicles (AUVs), catering to a wide range of underwater challenges using cutting-edge technologies.",

    images: [
      "https://res.cloudinary.com/dgjzygzgx/image/upload/v1705345499/card_yjtbjk.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
