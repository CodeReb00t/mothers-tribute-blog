import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Mother's Day Tribute Blog",
    description: "Celebrate and honor the spirit of motherhood",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`bg-gray-50`}
        >
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
