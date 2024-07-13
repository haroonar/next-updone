
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./libs/store/layout";

// Specify the weights you want to include this font overall apply on any text default font 
const poppins = Poppins({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});
// For SEO purpose to tank next js application
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
        {/* // wrapper for redux client components */}
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
