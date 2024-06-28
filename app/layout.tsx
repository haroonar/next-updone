
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import MainWrapper from "./components/wrapers/MainWrapper";

// Specify the weights you want to include
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});
// const lato = Poppins({
//   weight: ["100", "300", "400", "700", "900"],
//   subsets: ["latin"]
// });
//for SEO purpose
export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Staff Listings for Hiring Bartenders, Cocktail Waiters, Event Servers, and More',
  description: 'Discover and hire experienced Bartenders, cocktail waiters, event servers, event organizers, and more for your events. Explore our staff listings and find the perfect fit for your needs.',
  keywords: 'staff listing, hire Bartenders, cocktail waiters, event servers, event organizers, staff for hire, event staffing, bartending services, event planning, event staff',
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
