import type { Metadata } from "next";
import { buildLocaleLayoutMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = buildLocaleLayoutMetadata("fi");

export default function FiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
