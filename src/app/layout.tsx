import './globals.css';

export const metadata = {
  title: 'Tech Finance',
  description: 'Dashboard de Victor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-inter bg-byteLightGray text-black">
        {children}
      </body>
    </html>
  );
}
