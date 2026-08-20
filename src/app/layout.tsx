import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import logoYellow from "@/app/images/logo-yellow.png";
import logoWhite from "@/app/images/logo-white.png";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const accentFont = Fraunces({
  variable: "--font-accent",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Prouda Tutors: Teach English Online & Get Hired Globally",
  description: "The Blueprint: the step-by-step programme that takes African tutors from complete beginner to hired by international online teaching companies.",
  keywords: ["prouda", "tutors", "ESL", "online teaching", "TEFL", "teach English online", "get hired online"],
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
    title: "Prouda Tutors: Teach English Online & Get Hired Globally",
    description: "The Blueprint: the step-by-step programme that takes African tutors from complete beginner to hired by international online teaching companies.",
    type: 'website',
    // Add your actual Open Graph image URL
    images: [logoYellow.src],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Prouda Tutors: Teach English Online & Get Hired Globally",
    description: "The Blueprint: the step-by-step programme that takes African tutors from complete beginner to hired by international online teaching companies.",
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
      <body className={`${bodyFont.variable} ${accentFont.variable}`}>
        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1739344723877643');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1739344723877643&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Facebook Pixel Code */}
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
