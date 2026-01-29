import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Discover Our Products",
  description:
    "Explore our curated collection of premium, handcrafted products. From elegant bags to unique accessories, discover items that blend artistry with functionality.",
  robots: "index, follow",
  openGraph: {
    title: "Discover Our Products",
    description:
      "Explore our curated collection of premium, handcrafted products.",
    type: "website",
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
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
        
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
