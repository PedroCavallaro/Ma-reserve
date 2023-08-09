import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto_Flex as Roboto } from "next/font/google";
import Providers from "@/providers/Providers";
import { ReactNode } from "react";
import Header from "@/components/NavBar/Header";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
    subsets: ["latin"],
    weight: "500",
    variable: "--font-roboto",
});
export const metadata: Metadata = {
    title: "Ma Reserve",
    description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-br">
            <body className={`${inter.className} ${roboto.variable}`}>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
