
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground.jsx";
import SocialMedia from "@/components/main/SocialMedia.jsx";
import Footer from "@/components/main/Footer.jsx";


const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cedarville',
});

export const metadata = {
  title: "SKZ Portfolio",
  description: "This is our portfolio",
};

export default function RootLayout({
  children,
})
{
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



