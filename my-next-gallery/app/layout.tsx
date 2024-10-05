import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import Header from "./ui/layout/header";
import Footer from "./ui/layout/footer";
import { Content } from "antd/es/layout/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Next Gallery",
  description: "My Next Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <Layout>
            <Header />
            <Content className="p-8 mt-4">
              <div className="bg-white p-6 rounded shadow-md min-h-80">
                {children}
              </div>
            </Content>
            <Footer />
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
