import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior Full-Stack Engineer — SaaS MVPs & Custom Platforms",
  description:
    "Production-ready web applications and custom platforms. Senior-level development for SaaS MVPs and complex internal tools—built and shipped by one engineer who owns the entire stack.",
  openGraph: {
    title: "Senior Full-Stack Engineer — SaaS MVPs & Custom Platforms",
    description:
      "Production-ready web applications and custom platforms. Senior-level development for SaaS MVPs and complex internal tools.",
    type: "website",
  },
};

export default function RootLayout({
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
