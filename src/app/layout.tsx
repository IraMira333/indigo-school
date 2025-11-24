import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const open = Open_Sans({
    variable: "--font-open",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Indigo School",
    description: "Ми перетворимо навчання на улюблену звичку!",
    openGraph: {
        title: "Indigo School",
        description: "Ми перетворимо навчання на улюблену звичку!",
        url: "https://indigo-school.vercel.app/",
        siteName: "Indigo School",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta
                    name="image"
                    property="og:image"
                    content="/opengraph.jpg"
                />
                <meta name="twitter:image" content="/opengraph.jpg" />
                <GoogleTagManager gtmId="GTM-5LQHFC33" />
            </head>
            <body className={`${montserrat.variable} ${open.variable} `}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
