import "./globals.css";
// import { Inter, IBM_Plex_Sans } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// const plex = IBM_Plex_Sans({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });
import localFont from "next/font/local";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

const inter = localFont({
  src: "../public/fonts/Inter.var.woff2",
  display: "swap",
});

export const metadata = {
  title: "Open Marketplace",
  description: "An open source marketplace for everything you want to sell.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={clsx(
            inter.className,
            "bg-gray-50 text-gray-900 dark:text-grey-50 dark:bg-grey-800"
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
