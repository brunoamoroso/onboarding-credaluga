import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ThemeRegistry from "./components/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "CredAluga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{key: "mui"}}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
