import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: new URL("https://etradreams.com"),

  title: "ETRA Dreams | One Universe. Infinite Creativity.",

  description:
    "ETRA Dreams brings together visual effects, animation, gaming, CGI and immersive digital experiences under one creative ecosystem.",

  keywords: [
    "ETRA Dreams",
    "ETRA VFX",
    "ETRA Gaming",
    "Visual Effects",
    "Animation",
    "Game Development",
    "CGI",
    "Interactive Experiences",
  ],

  icons: {
    icon: [
      {
        url: "/images/etra-dreams-favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/etra-dreams-favicon.png",
    apple: "/images/etra-dreams-favicon.png",
  },

  openGraph: {
    title: "ETRA Dreams | One Universe. Infinite Creativity.",

    description:
      "Explore ETRA Dreams — creating visual effects, animation, gaming, CGI and immersive digital experiences.",

    url: "https://etradreams.com",

    siteName: "ETRA Dreams",

    images: [
      {
        url: "/images/VFX_banner.jpeg",
        width: 1200,
        height: 630,
        alt: "ETRA Dreams – VFX, Animation and Gaming",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "ETRA Dreams | One Universe. Infinite Creativity.",

    description:
      "Explore ETRA Dreams — visual effects, animation, gaming, CGI and immersive digital experiences.",

    images: ["/images/VFX_banner.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}