import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

// Specify the weights you want to include
// const poppins = Poppins({ 
//   weight: ["400", "500", "600", "700","800","900"], 
//   subsets: ["latin"] 
// });
const lato = Lato({ 
  weight: ["100", "300", "400", "700", "900"], 
  subsets: ["latin"] 
});
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
      <body className={lato.className}>
        <div className="fixed z-[9990] w-full">
          <Header />
        </div>
        <div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
