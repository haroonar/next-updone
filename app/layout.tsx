
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./libs/store/layout";
import Image from "next/image";

// Specify the weights you want to include
const poppins = Poppins({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});
// const lato = Poppins({
//   weight: ["100", "300", "400", "700", "900"],
//   subsets: ["latin"]
// });
//for SEO purpose
export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Updone',
  description: 'Discover and hire experienced Bartenders, cocktail waiters, event servers, event organizers, and more for your events. Explore our staff listings and find the perfect fit for your needs.',
  keywords: 'staff listing, hire Bartenders, cocktail waiters, event servers, event organizers, staff for hire, event staffing, bartending services, event planning, event staff',
  icons: {
    icon: '/images/logo2.svg' // Corrected path as a string
  }
};



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
    <html lang="en">
      <body className={`${poppins.className} no-x-overflow`}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
