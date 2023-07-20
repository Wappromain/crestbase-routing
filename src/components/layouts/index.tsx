import Footer from "@/components/Footer";
import "@/styles/global.styles";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Crestbase</title>
        <meta
          name="description"
          content="Crestbase is an online real estate investment company that offers a range of pricing plans to suit your needs and budget."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
