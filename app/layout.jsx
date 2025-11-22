import { Sometype_Mono } from "next/font/google";
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import "./globals.css";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Portfolio CESB | Carlos Silva",
  description: "Portafolio personal de Carlos Silva, mostrando proyectos de desarrollo web frontend y full stack con React, Next.js y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang = "en">
      <body className = {`${sometypeMono.variable} antialiased overflow-hidden relative`}>
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className = "flex">
            <div className = "hidden xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className = "w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div className = "">
                {children}
              </div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}