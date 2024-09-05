import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
const navItems = [
  {
    name: "Home",
    link: "/",
    // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Expertise",
    link: "/expertise",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Project",
    link: "#project",
    // icon: (
    //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    // ),
  },
  // {
  //   name: "Blog",
  //   link: "#blog",
  // },
  {
    name: "Contact",
    link: "#contact",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const metadata: Metadata = {
  title: "Supaporn's portfolio",
  description: "Creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
