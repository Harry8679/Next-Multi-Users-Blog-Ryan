import { ThemeProvider } from "./context/theme";
import "./globals.css";

export const metadata = {
  title: "Next Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme='dark'>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
