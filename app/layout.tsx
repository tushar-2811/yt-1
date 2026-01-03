// This root layout is required for the app directory
// but we'll redirect to locale-specific layouts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

