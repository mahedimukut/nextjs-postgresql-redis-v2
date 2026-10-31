import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js + Postgres + Redis • HostifyCloud",
  description: "Fullstack application deployed on HostifyCloud"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
