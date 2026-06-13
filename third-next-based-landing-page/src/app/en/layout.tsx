import { DocumentLang } from "@/components/i18n/DocumentLang";

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DocumentLang lang="en" />
      {children}
    </>
  );
}
