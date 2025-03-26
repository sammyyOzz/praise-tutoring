import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import logoYellow from "@/app/images/logo-yellow.png";
import logoWhite from "@/app/images/logo-white.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prouda Tutors: Become an online tutor",
  description: "Prouda: Kickstart, grow and thrive in your tutoring business!",
  keywords: ["prouda", "tutors", "tutoring", "online", "aspiring", "tutor"],
  robots: {
    index: true,  
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Recommended additional metadata
  metadataBase: new URL('https://proudatutors.com'), // Important for canonical URLs
  alternates: {
    canonical: '/', // Recommended for avoiding duplicate content
  },
  openGraph: {
    title: "Prouda Tutors: Become an online tutor",
    description: "Prouda: Kickstart, grow and thrive in your tutoring business!",
    type: 'website',
    // Add your actual Open Graph image URL
    images: [logoYellow.src], 
  },
  twitter: {
    card: 'summary_large_image',
    title: "Prouda Tutors: Become an online tutor",
    description: "Prouda: Kickstart, grow and thrive in your tutoring business!",
    // Add your Twitter image URL
    images: [logoWhite.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
