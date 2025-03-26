import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import SocialMedia from "@/components/main/SocialMedia";
import Footer from "@/components/main/Footer";


const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cedarville',
});

export const metadata: Metadata = {
  title: "SKZ Portfolio",
  description: "This is our portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
       <StarsCanvas />
       <SocialMedia />
       {children}
       <Footer />
      </body>
    </html>
  );
}



