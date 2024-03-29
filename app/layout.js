import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import bg from "../public/assets/bg.PNG";
import "tailwindcss/tailwind.css";
import Footer from "./Components/Footer";
import DataProviderContext from "./Components/DataProvider/DataProviderContext";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Movieverse",
  description: "Movierse - Your Movies Universe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <div
          className="min-h-screen overflow-hidden pt-80"
          style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}
        >
          <DataProviderContext>
            <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full ">
              {children}
            </div>
          </DataProviderContext>
        </div>
        <Footer />
      </body>
    </html>
  );
}
