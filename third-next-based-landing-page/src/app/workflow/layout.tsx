import { DocumentLang } from "@/components/i18n/DocumentLang";

export default function WorkflowLayout({
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
