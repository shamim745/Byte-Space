import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import CustomCursor from "@/components/common/CustomCursor";
import ScrollReveal from "@/components/common/ScrollReveal";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const satoshi = localFont({
  src: [{ path: "./fonts/Satoshi-Variable.woff2", style: "normal", weight: "300 900" }],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — Online courses from top creators",
    template: "%s | ByteSpace",
  },
  description:
    "Explore hundreds of online courses across technology, design, business and the arts, and learn from experienced creators.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ScrollReveal />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
