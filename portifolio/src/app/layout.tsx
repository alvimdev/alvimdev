import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "alvimdev | Portfólio",
  description: "Meu portfólio pessoal, onde compartilho meus projetos e experiências.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/images/logo-removebg.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" integrity="sha384-tViUnnbYAV00FLIhhi3v/dWt3Jxw4gZQcNoSCxCIFNJVCx7/D55/wXsrNIRANwdD" crossOrigin="anonymous"></link>
      </head>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
