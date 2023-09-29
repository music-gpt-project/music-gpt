import { robotoFlex } from "@/utils/fonts/globalFont";
import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { ConversationProvider } from "@/contexts/ConversationProvider";
import { SessionProvider } from "@/components/Auth/SessionProvider";
import Google from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "@/components/Auth/Login";

export const metadata: Metadata = {
  title: "Music GPT",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html className={robotoFlex.className} lang="en">
      <SessionProvider session={session}>
        <ConversationProvider>
          {!session ? (
            <body className="flex justify-center items-center bg-primary">
              <Login />
            </body>
          ) : (
            <body className="flex flex-col md:flex-row">
              <header className="flex md:hidden sticky top-0 z-40">
                <Header />
              </header>

              {/* Sidebar: greater than md */}
              <div className="h-screen hidden md:flex">
                <Sidebar />
              </div>

              <main className="grow overflow-auto h-full z-30 bg-primary">
                <div className="h-full mx-auto">{children}</div>
              </main>
            </body>
          )}
        </ConversationProvider>
      </SessionProvider>
    </html>
  );
}

// CSR("use client") SSG ISR SSR(default)
// hybrid
