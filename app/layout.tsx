
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import MainWrapper from "./components/wrapers/MainWrapper";

// Specify the weights you want to include
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700","800","900"], 
  subsets: ["latin"] 
});
// const lato = Poppins({
//   weight: ["100", "300", "400", "700", "900"],
//   subsets: ["latin"]
// });
export const metadata: Metadata = {
  title: "Updone",
  description: "Updone is platform to hire Bartenders, Waiters, Cocktail Servers, Bar Backs, Promo Models, Event Helper.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} no-x-overflow`}>
        <Header />
        <MainWrapper>
          {children}
        </MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
