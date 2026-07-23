import type { Metadata } from "next";
import { buildLocaleLayoutMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = buildLocaleLayoutMetadata("en");

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
