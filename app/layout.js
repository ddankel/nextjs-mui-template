export const metadata = {
  title: "NextJS / MUI Template",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="darkly-dark">
      <body>{children}</body>
    </html>
  );
}
