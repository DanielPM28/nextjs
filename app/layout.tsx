<<<<<<< HEAD
=======
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
>>>>>>> 745b799 (Primeros pasos)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>{children}</body>
=======
      <body className={`${inter.className} antialiased`}>{children}</body>
>>>>>>> 745b799 (Primeros pasos)
    </html>
  );
}
