import "./styles/globals.scss";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar/page"));
const Footer = dynamic(() => import("./components/Footer/page"));

const ClientProvider = dynamic(() => import("./components/ClientProvider/page"));

export const metadata = {
  title: "Wright Nudge",
  description: "Wright Nudge website", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/image/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Poppins, sans-serif" }}>
        <ClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}

