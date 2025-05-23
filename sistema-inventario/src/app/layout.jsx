import { Inter } from 'next/font/google'
import "./globals.css";
import { SidebarProvider } from '@/components/ui/sidebar';
import { AsaidMenu } from '@/components/layout/asaid-menu';
 
export const inter = Inter({subsets: ['inter'], subsets: ['latin']})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>
        <SidebarProvider>
          <AsaidMenu />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
